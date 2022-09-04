import "./categories.styles.scss";
import CategroyItem from "../category-item/category-item.component";

function Categories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategroyItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
