import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.div`
  span {
    padding: 5px;
    border: 1px solid #6a97c9;
    display: inline-block;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

const ResetButton = ({ onClick }) => {
  return (
    <Styles>
      <span onClick={onClick}>Reset</span>
    </Styles>
  );
};

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ResetButton;
