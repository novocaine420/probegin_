import React from "react";
import PropTypes from "prop-types";

import "./Tab.scss";

const Tab = ({ title, isCurrent, onClick }) => {
  return (
    <span className={`tab${isCurrent ? " current" : ""}`} onClick={onClick}>
      {title}
    </span>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tab;
