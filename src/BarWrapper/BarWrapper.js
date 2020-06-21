import React from "react";
import PropTypes from "prop-types";
import Bar from "../Bar/Bar";
import "./BarWrapper.scss";

const BarWrapper = ({ barValues, activeBarIndex }) => (
  <div className="BarWrapper">
    {barValues.map((barValue, i) => (
      <Bar
        key={i} // the key must be the index since there could be two identical values
        value={barValue}
        active={i === activeBarIndex}
      />
    ))}
  </div>
);

BarWrapper.propTypes = {
  activeBarIndex: PropTypes.number.isRequired,
  barValues: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default BarWrapper;
