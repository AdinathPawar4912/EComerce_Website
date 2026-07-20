const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      <button
        type="button"
        onClick={() => onCategoryChange("all")}
        className={`rounded-full px-5 py-2 font-semibold transition ${
          selectedCategory === "all"
            ? "bg-orange-500 text-white"
            : "bg-white text-slate-700 shadow hover:bg-slate-200"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 font-semibold capitalize transition ${
            selectedCategory === category
              ? "bg-orange-500 text-white"
              : "bg-white text-slate-700 shadow hover:bg-slate-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;