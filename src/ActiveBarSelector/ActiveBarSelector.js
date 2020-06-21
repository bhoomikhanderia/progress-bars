/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import "./ActiveBarSelector.scss";

const ActiveBarSelector = ({ activeBarIndex, changeActiveBar, barValues }) => (
  <label className="ActiveBarSelector">
    Select a Progress Bar
    <select
      className="ActiveBarSelector__select"
      value={activeBarIndex}
      onChange={e => {
        changeActiveBar(Number(e.target.value));
      }}
    >
      {barValues.map((bar, i) => (
        <option key={i} value={i}>{`# Progress ${i + 1}`}</option>
      ))}
    </select>
  </label>
);

ActiveBarSelector.propTypes = {
  barValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeBarIndex: PropTypes.number.isRequired,
  changeActiveBar: PropTypes.func.isRequired
};

export default ActiveBarSelector;
