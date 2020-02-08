import React from "react";
import PropTypes from "prop-types";

import "./Cell.scss";

const Cell = ({ title }) => {
  return <span>{title}</span>;
};

Cell.propTypes = {
  title: PropTypes.string.isRequired
};

export default Cell;
