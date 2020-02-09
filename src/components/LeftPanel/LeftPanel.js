import React, { useContext } from "react";

import Cell from "../basic/Cell/Cell";
import ResetButton from "../basic/ResetButton/ResetButton";
import { ProductsContext } from "../../context/products-context";
import { categories } from "../../mockData/categories";

import "./LeftPanel.scss";

const LeftPanel = () => {
  const [, setProducts, allProducts] = useContext(ProductsContext);

  const resetProducts = () => {
    setProducts(allProducts);
  };

  const onCategoryChange = category => {
    setProducts(allProducts.filter(product => product.category === category));
  };

  return (
    <div className="left-panel">
      <div className="content-wrapper">
        <div className="content">
          <ResetButton onClick={resetProducts} />
          <div className="categories">
            {categories.map((category, index) => (
              <Cell
                key={index}
                title={category}
                onClick={() => onCategoryChange(category)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
