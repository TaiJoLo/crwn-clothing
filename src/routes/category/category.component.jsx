import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import { CategroyContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("effect fired calling setProdcuts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategroyContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategroyContainer>
    </Fragment>
  );
};

export default Category;
