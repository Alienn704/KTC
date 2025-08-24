import { Form, Input, DatePicker, Select, Switch, Button, Space } from "antd";
import type { CreateEmployeeRequest } from "../types/employee";

type Props = {
  form: any;
  onSubmit: (values: CreateEmployeeRequest) => void;
  onCancel: () => void;
};

export default function CreateEmployeeForm({ form, onSubmit, onCancel }: Props) {
  return (
    <Form form={form} layout="vertical" onFinish={onSubmit} >
      <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
        <Input />
      </Form.Item>

      <Form.Item name="phoneNumber" label="Phone" rules={[{ required: true, len: 10 }]}>
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

      <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">Create</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
