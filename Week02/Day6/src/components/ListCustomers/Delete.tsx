const url = "https://server.aptech.io/online-shop/customers";

type Props = {
  customerId: number;
  onDeleted?: (id: number) => void;
};

const Delete = ({ customerId, onDeleted }: Props) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Bạn có chắc muốn xóa khách hàng này?`
    );
    if (!confirmDelete) {
      return;
    }
    try {
      const res = await fetch(`${url}/${customerId}`, { method: "DELETE" });
      if (res.ok) {
        alert("Xoá thành công!");
        onDeleted?.(customerId);
      } else {
        alert("Xoá thất bại!");
      }
    } catch (error) {
      alert("Xoá không thành công!");
      console.error("Delete error: ", error);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default Delete;
