const CategoryTab = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex gap-8 mb-8 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`pb-3 transition-all whitespace-nowrap ${
            selectedCategory === category
              ? "border-b-3 border-[#8D4B00]  text-[#8D4B00] "
              : "text-gray-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
