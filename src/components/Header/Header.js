import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";

const Header = ({ title }) => {
  return (
    <header>
      <span>{title}</span>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
