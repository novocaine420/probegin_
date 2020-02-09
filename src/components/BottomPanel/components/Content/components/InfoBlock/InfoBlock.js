import React from "react";
import PropTypes from "prop-types";

import "./InfoBlock.scss";

const InfoBlock = ({ label = "", text = "", long }) => {
  return (
    <div className="info-block">
      <span className="label">{label}</span>
      <span className={`text${long ? " long" : ""}`}>{text}</span>
    </div>
  );
};

InfoBlock.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  long: PropTypes.bool
};

export default InfoBlock;
