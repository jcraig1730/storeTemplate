import React from "react";
import PropTypes from "prop-types";

const TextField = ({ options }) => {
  const { type, id, onChange, value, label, alert } = options;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        onChange={onChange}
        value={value}
      />
      <div className={`text-danger ${alert.on === id ? "d-block" : "d-none"}`}>
        {alert.info.message}
      </div>
    </div>
  );
};

TextField.propTypes = {
  fieldOptions: PropTypes.object.isRequired
};

export default TextField;
