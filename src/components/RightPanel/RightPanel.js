import React, { useState, useContext } from "react";
import Cell from "../basic/Cell/Cell";
import Dropdown from "./components/Dropdown";
import { ProductsContext } from "../../context/products-context";
import { getFilters } from "../../helpers/getFilters";

import "./RightPanel.scss";

const RightPanel = () => {
  const [, setProducts, allProducts] = useContext(ProductsContext);
  const [filters, setFilters] = useState(getFilters(allProducts, "company"));
  const [filter, setFilter] = useState("company");

  const onChange = e => {
    setFilter(e.target.value);
    setFilters(getFilters(allProducts, e.target.value));
  };

  const onFilterClick = appliedFilter => {
    setProducts(
      allProducts.filter(product => product[filter] === appliedFilter)
    );
  };

  return (
    <div className="right-panel">
      <div className="content-wrapper">
        <div className="content">
          <Dropdown onChange={onChange} />
          <div className="filters">
            {filters.map((filter, index) => (
              <Cell
                key={index}
                title={filter}
                onClick={() => onFilterClick(filter)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
