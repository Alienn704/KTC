
import { useParams } from "react-router";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: {
    name: string;
  };
};

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (!id) return;

    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [id]);

  if (!product) return <p className="p-4">Không tìm thấy sản phẩm.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.images[0]}
          className="w-full h-96 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-500 mb-2">{product.category?.name}</p>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
