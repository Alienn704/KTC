import { useEffect, useState } from "react";
import Delete from "./Delete";
import EditCustomerModal from "./Edit";

const url = "https://server.aptech.io/online-shop/customers";

type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthday: string;
};

function CustomerTable() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

  const fetchCustomers = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="p-6">
      {editingCustomer && (
        <EditCustomerModal
          customer={editingCustomer}
          onClose={() => setEditingCustomer(null)}
          onUpdated={() => {
            fetchCustomers();
            setEditingCustomer(null);
          }}
        />
      )}

      <h2 className="text-2xl font-bold text-blue-700 mb-4">Customer List</h2>
      <div className="overflow-x-auto rounded-lg shadow max-w-5xl mx-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-0.5 px-2 border-b text-left">Name</th>
              <th className="py-0.5 px-2 border-b text-left">Phone Number</th>
              <th className="px-2 border-b text-left">Address</th>
              <th className="py-0.5 px-2 border-b text-left">Birthday</th>
              <th className="py-0.5 px-2 border-b text-left">Email</th>
              <th className="py-0.5 px-2 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className=" px-2 border-b">
                  {customer.firstName} {customer.lastName}
                </td>
                <td className="py-0.5 px-2 border-b">{customer.phoneNumber}</td>
                <td className="py-0.5 px-2 border-b">{customer.address}</td>
                <td className="py-0.5 px-2 border-b">{customer.birthday}</td>
                <td className="py-0.5 px-2 border-b">{customer.email}</td>
                <td className="py-0.5 px-2 border-b flex gap-1">
                  <button
                    onClick={() => setEditingCustomer(customer)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </button>
                  <Delete customerId={customer.id} onDeleted={fetchCustomers} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;
