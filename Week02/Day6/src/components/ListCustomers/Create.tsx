import { useState } from "react";

const url = "https://server.aptech.io/online-shop/customers";

type Props = {
  onCreated?: () => void;
};

const Create = ({ onCreated }: Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthday: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setMessage("Vui lòng nhập đầy đủ tên và email!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Email không hợp lệ.");
      return;
    }

    if (formData.phoneNumber && !/^\d{9,12}$/.test(formData.phoneNumber)) {
      setMessage("Số điện thoại không hợp lệ!");
      return;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Tạo thất bại!");

      const result = await res.json();
      setMessage(`Đã tạo: ${result.firstName} ${result.lastName}`);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        birthday: "",
      });

      onCreated?.();
    } catch {
      setMessage("Có lỗi xảy ra khi tạo khách hàng.");
    }
  };

  return (
    <div className="bg-white p-3 rounded shadow max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-blue-600 mb-4 text-center">
        Create New Customer
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-3">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-1/2 border p-1 rounded text-sm"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-1/2 border p-1 rounded text-sm"
          />
        </div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-1 rounded text-sm"
        />
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border p-1 rounded text-sm"
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-1 rounded text-sm"
        />
        <input
          name="birthday"
          type="date"
          value={formData.birthday}
          onChange={handleChange}
          className="w-full border p-1 rounded text-sm"
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 text-sm"
          >
            Create
          </button>
        </div>
      </form>
      {message && <p className="mt-3 text-green-600 text-sm">{message}</p>}
    </div>
  );
};

export default Create;
