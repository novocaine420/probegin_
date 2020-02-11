import React from "react";
import PropTypes from "prop-types";

import "./Cell.scss";

const Cell = ({ title, onClick }) => {
  return (
    <span className="cell" onClick={onClick}>
      {title}
    </span>
  );
};

Cell.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

export default Cell;
