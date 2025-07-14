import React from "react";
import Image from "next/image";

async function ProductPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Danh sách sản phẩm
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={300}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-semibold text-lg mb-2 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-blue-600 font-bold text-xl">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProductPage;
