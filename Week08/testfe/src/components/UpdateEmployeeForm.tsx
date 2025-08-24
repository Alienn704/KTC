import { Form, Input, DatePicker, Select, Switch, Button, Space } from "antd";
import dayjs from "dayjs";
import type { Employee, UpdateEmployeeRequest } from "../types/employee";

type Props = {
  form: any;
  initialValues: Employee | null;
  onSubmit: (values: UpdateEmployeeRequest) => void;
  onCancel: () => void;
};

export default function UpdateEmployeeForm({
  form,
  initialValues,
  onSubmit,
  onCancel,
}: Props) {
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        ...initialValues,
        dateOfBirth: initialValues?.dateOfBirth
          ? dayjs(initialValues.dateOfBirth)
          : null,
      }}
      onFinish={onSubmit}
    >
      <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email">
        <Input disabled />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone"
        rules={[{ required: true, len: 10 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Select
          options={[
            { value: "Nam" },
            { value: "Nu" },
            { value: "Khac" },
          ]}
        />
      </Form.Item>

      <Form.Item name="dateOfBirth" label="Date of Birth">
        <DatePicker />
      </Form.Item>

      <Form.Item name="active" label="Active" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item name="password" label="New Password">
        <Input.Password placeholder="Leave empty if not changing" />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
