import { useState } from "react";

type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthday: string;
};

type Props = {
  customer: Customer;
  onClose: () => void;
  onUpdated: (updated: Customer) => void;
};

const url = "https://server.aptech.io/online-shop/customers";

const EditCustomerModal = ({ customer, onClose, onUpdated }: Props) => {
  const [formData, setFormData] = useState({ ...customer });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Loại bỏ id khỏi dữ liệu
    const { id, ...payload } = formData;

    console.log("PATCH to:", `${url}/${customer.id}`);
    console.log("Payload:", payload);

    try {
      const res = await fetch(`${url}/${customer.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json();
      alert("Cập nhật thành công!");
      onUpdated(updated);
      onClose();
    } catch (err) {
      alert("Cập nhật thất bại!");
      console.error("Update error: ", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Edit Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Email"
            required
          />
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Phone Number"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Address"
          />
          <input
            name="birthday"
            type="date"
            value={formData.birthday.slice(0, 10)}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomerModal;
