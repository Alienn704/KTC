import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

type ProductListProps = {
  categoryId?: number;
};

const ProductList = ({ categoryId }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    const offset = (page - 1) * pageSize;
    const url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${pageSize}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [page]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h2>
      {products.length === 0 ? (
        <span className="text-gray-500">Không có sản phẩm nào.</span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {product.category?.name}
                </p>
                <p className="text-blue-600 font-bold text-base">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {/* phân trang */}
      <div className="flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 border rounded hover:bg-gray-100"
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
        >
          <ChevronLeft />
        </button>
        <span className="font-medium text-gray-600">{page}</span>
        <button
          disabled={page === products.length}
          className="px-4 py-2 border rounded hover:bg-gray-100"
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
