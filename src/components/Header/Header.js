import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
