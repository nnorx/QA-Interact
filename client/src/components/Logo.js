import React from "react";
import PropTypes from "prop-types";

import "../styles/Logo.css";

const Logo = ({ alt, src}) => (
  <div className={`logo-container`}>
    <img className="logo" alt={alt} src={src} />
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;