import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchFilter = ({ label, callback }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => callback(searchValue), [searchValue]);

  return (
    <div className="form-group">
      <label className="mb-0" for="search">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id="search"
        onChange={handleChange}
        value={searchValue}
        placeholder={`Search ${label}`}
      />
    </div>
  );
};

SearchFilter.propTypes = {
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default SearchFilter;
