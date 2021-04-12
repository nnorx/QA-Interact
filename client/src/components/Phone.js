import React from "react";
import PropTypes from "prop-types";

import "../styles/Phone.css";

const Phone = ({ alt, src}) => (
  <div className={`phone-container`}>
    <img className="phone" alt={alt} src={src} />
  </div>
);

Phone.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Phone;