import React from "react";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

const FilterSidebar = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Categories fetched:", data);
        setCategories(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <div className="w-64 p-4 bg-white border rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Bộ lọc</h2>

        <div className="flex flex-col gap-2 text-gray-700">
          {categories.map((category) => (
            <label
              key={category.id}
              className="inline-flex items-center space-x-2"
            >
              <input type="checkbox" className="w-4 h-4" />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
