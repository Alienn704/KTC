import React from "react";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

type Props = {
  onCategoryChange: (categoryId: number, checked: boolean) => void;
};

const FilterSidebar = ({ onCategoryChange }: Props) => {
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

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    onCategoryChange(id, event.target.checked);
  };

  return (
    <div>
      <div className="w-48 p-2 bg-white ">
        <h2 className="text-lg font-semibold mb-4">Bộ lọc</h2>

        <div className="flex flex-col gap-2 text-gray-700">
          {categories.map((cat) => (
            <label key={cat.id} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                onChange={(e) => handleCheckboxChange(e, cat.id)}
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
