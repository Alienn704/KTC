import React from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
};

async function TaskSSR() {
  const res = await fetch("https://server.aptech.io/online-shop/products", {
    cache: "no-store",
  });
  const products: Product[] = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Danh sách sản phẩm SSR
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <Link href={`/task-isr/${product.id}`} key={product.id}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h2>ID: {product.id}</h2>
              <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                Name: {product.name}
              </h2>
              <p className="text-blue-600 font-bold text-xl">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default TaskSSR;
