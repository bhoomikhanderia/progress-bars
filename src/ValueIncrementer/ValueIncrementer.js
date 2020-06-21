import React from "react";
import PropTypes from "prop-types";
import "./ValueIncrementer.scss";

const ValueIncrementer = ({ value, changeCurrentBarValue }) => (
  <button
    type="button"
    className="ValueIncrementer"
    onClick={changeCurrentBarValue(value)}
  >
    {value}
  </button>
);

ValueIncrementer.propTypes = {
  changeCurrentBarValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default ValueIncrementer;
