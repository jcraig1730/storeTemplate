import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchFilter = ({ label, callback }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => callback(searchValue), [searchValue]);

  return (
    <div class="form-group">
      <label for="search" placeholder="Search">
        {label}
      </label>
      <input
        type="text"
        class="form-control"
        id="search"
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
};

SearchFilter.propTypes = {
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default SearchFilter;
