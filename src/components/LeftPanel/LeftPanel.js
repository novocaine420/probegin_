import React from "react";
import PropTypes from "prop-types";

import { categories } from "../../mockData/categories";
import Cell from "../basic/Cell/Cell";

import "./LeftPanel.scss";

const LeftPanel = props => {
  return (
    <div className="left-panel">
      <div className="content">
        {categories.map((category, index) => (
          <Cell key={index} title={category} />
        ))}
      </div>
    </div>
  );
};

LeftPanel.propTypes = {};

export default LeftPanel;
