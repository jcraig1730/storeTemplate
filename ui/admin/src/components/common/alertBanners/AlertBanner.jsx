import React, { useEffect } from "react";
import PropTypes from "prop-types";

const AlertBanner = ({ type, info, shouldDisplay }) => {
  const { title, message } = info;
  return (
    <div
      className={`mt-0 ml-0 alert ${
        type === "success" ? "alert-success" : "alert-danger"
      } ${shouldDisplay ? "d-block" : "d-none"}`}
    >
      <strong>{title}!</strong>
    </div>
  );
};

AlertBanner.propTypes = {
  type: PropTypes.string,
  info: PropTypes.object,
  shouldDisplay: PropTypes.bool
};

export default AlertBanner;
