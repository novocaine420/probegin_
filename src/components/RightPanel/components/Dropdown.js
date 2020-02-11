import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styled = styled.div`
  select {
    width: 100%;
    height: 25px;
    margin-bottom: 20px;
    border: 1px solid #6a97c9;
    background-color: #eeeeee;
    font-size: 20px;
  }
`;

const Dropdown = ({ onChange }) => {
  return (
    <Styled>
      <select name="dropdown" id="filter-type" onChange={onChange}>
        <option value="company">Show companies</option>
        <option value="diagonal">Show dimensions</option>
        <option value="resolution">Show screen resolutions</option>
      </select>
    </Styled>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
