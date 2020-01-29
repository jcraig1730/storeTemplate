import React from "react";
import PropTypes from "prop-types";

const Select = ({ options }) => {
  const { label, id, value, onChange, selectOptions } = options;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
      >
        <option className="inactive" value="defaultSelect" disabled selected>
          Please choose
        </option>
        {selectOptions.map(option => (
          <option className="" value={option._id} key={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.object.isRequired
};

export default Select;
