import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Bar.scss";

const Bar = ({ active, value }) => {
  const className = classnames("Bar", { "Bar--active": active });

  // don't allow the width to go over 100%
  const barWidth = Math.min(value, 100);
  const barClassName = classnames("Bar__fill", {
    "Bar__fill--over-warning": value > 100
  });

  return (
    <div className={className}>
      {value}%
      <div style={{ width: `${barWidth}%` }} className={barClassName} />
    </div>
  );
};

Bar.propTypes = {
  active: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

export default Bar;
