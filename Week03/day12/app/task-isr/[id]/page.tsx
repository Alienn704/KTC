type Product = {
  id: number;
  name: string;
  price: number;
};

// Update the Params type to reflect that 'params' is a Promise
type Params = {
  params: Promise<{ id: string }>;
};

export const revalidate = 60;

export default async function TaskISR({ params }: Params) {
  // Await the params object to destructure the id
  const { id } = await params;

  const res = await fetch(
    `https://server.aptech.io/online-shop/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  const product: Product = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Chi tiết sản phẩm ISR
      </h1>
      <div className="max-w-md mx-auto p-6 text-center bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          Name: {product.name}
        </h2>
        <p className="text-blue-600 font-bold text-2xl">${product.price}</p>
      </div>
    </main>
  );
}
