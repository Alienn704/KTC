import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Table, Button, Space, Modal, Form, message } from "antd";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../api/employeeApi";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import CreateEmployeeForm from "../components/CreateEmployeeForm";
import UpdateEmployeeForm from "../components/UpdateEmployeeForm";
import type {
  Employee,
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
} from "../types/employee";
import dayjs from "dayjs";

export default function EmployeePage() {
  const queryClient = useQueryClient();
  const { data: employees, isLoading } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  // common success handler
  const refreshList = (msg: string) => {
    queryClient.invalidateQueries({ queryKey: ["employees"] });
    message.success(msg);
    setIsModalVisible(false);
    form.resetFields();
    setEditingEmployee(null);
  };

  // mutations
  const createMutation = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => refreshList("Employee created"),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, values }: { id: number; values: UpdateEmployeeRequest }) =>
      updateEmployee(id, values),
    onSuccess: () => refreshList("Employee updated"),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => refreshList("Employee deleted"),
    onSettled: () => setLoadingId(null),
  });

  // handlers
  const handleCreate = () => {
    setEditingEmployee(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record: Employee) => {
    setEditingEmployee(record);
    form.setFieldsValue({
      ...record,
      dateOfBirth: record.dateOfBirth ? dayjs(record.dateOfBirth) : null,
    });
    setIsModalVisible(true);
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure to delete this employee?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        setLoadingId(id);
        return deleteMutation.mutateAsync(id);
      },
    });
  };

  const handleSubmit = (values: CreateEmployeeRequest | UpdateEmployeeRequest) => {
    const { dateOfBirth, ...rest } = values;
    const formatted = {
      ...rest,
      dateOfBirth: dateOfBirth
        ? dayjs(dateOfBirth).format("YYYY-MM-DD")
        : null,
      password: (values as any).password || null,
    };

    if (editingEmployee) {
      updateMutation.mutate({ id: editingEmployee.id, values: formatted });
    } else {
      createMutation.mutate(formatted as CreateEmployeeRequest);
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Full Name", dataIndex: "fullName" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phoneNumber" },
    {
      title: "Active",
      dataIndex: "active",
      render: (val: boolean) => (val ? "Yes" : "No"),
    },
    {
      title: "Action",
      render: (_: unknown, record: Employee) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            loading={loadingId === record.id}
          />
        </Space>
      ),
    },
  ];

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginBottom: 16 }}
        onClick={handleCreate}
      >
        Create Employee
      </Button>

      <Table<Employee> rowKey="id" dataSource={employees || []} columns={columns} />

      <Modal
        title={editingEmployee ? "Update Employee" : "Create Employee"}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingEmployee(null);
          form.resetFields();
        }}
        footer={null}
        destroyOnHidden
        maskClosable={false}
      >
        {editingEmployee ? (
          <UpdateEmployeeForm
            form={form}
            initialValues={editingEmployee}
            onSubmit={handleSubmit}
            onCancel={() => {
              setIsModalVisible(false);
              setEditingEmployee(null);
              form.resetFields();
            }}
          />
        ) : (
          <CreateEmployeeForm
            form={form}
            onSubmit={handleSubmit}
            onCancel={() => {
              setIsModalVisible(false);
              form.resetFields();
            }}
          />
        )}
      </Modal>
    </div>
  );
}
