import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({ onChange }) => {
  return (
    <div className="input-wrapper">
      <input type="text" onChange={onChange} placeholder="ENTER SEARCH TEXT" />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Input;
