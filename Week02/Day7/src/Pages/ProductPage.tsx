
import ProductList from "../Components/ProductList";
import FilterSidebar from "../Components/FilterSidebar";
import { useState } from "react";

const ProductPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCategoryChange = (categoryId: number, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, categoryId] : prev.filter((id) => id !== categoryId)
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-6">
        <div className="w-1/4">
          <FilterSidebar onCategoryChange={handleCategoryChange}/>
        </div>

        <div className="w-3/4">
          <ProductList selectedCategories={selectedCategories} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
