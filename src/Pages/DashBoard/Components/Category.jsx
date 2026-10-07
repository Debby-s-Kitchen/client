import { useState } from "react";
import CategoryTab from "../../../Components/Menu/CategoryTab";
import MenuGrid from "../../../Components/Menu/MenuGrid";
import { useAddFood } from "../../../Components/Store/UseAddFood";


const Category = () => {
  const MenuData = useAddFood((state) => state.MenuData);
  const derivedCategories = [...new Set(MenuData.map((item) => item.category))];
  const categories = ["All", ...derivedCategories];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts =
    selectedCategory === "All"
      ? MenuData
      : MenuData.filter((product) => product.category === selectedCategory);
  return (
    <div className="p-4 xl:p-8  ">
      <CategoryTab
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MenuGrid
        MenuData={filteredProducts}
        
      />
    </div>
  );
};

export default Category;