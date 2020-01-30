import React from "react";
import PropTypes from "prop-types";

const CheckBoxSelect = ({ selectOptions, currentlySelected, onCheck }) => {
  let currentHash;
  try {
    currentHash = currentlySelected.reduce((hash, vendor) => {
      if (!hash[vendor._id]) {
        hash[vendor] = true;
      }
      return hash;
    }, {});
  } catch (err) {
    currentHash = {};
  }

  return (
    <div
      className="form-group "
      style={{ maxHeight: "20vh", overflowY: "scroll" }}
    >
      {selectOptions.map(option => {
        return (
          <div class="form-check">
            <input
              class="form-check-input selected"
              type="checkbox"
              value={option.name}
              id={option._id}
              checked={currentHash[option._id]}
              onClick={onCheck}
            />
            <label class="form-check-label" for={option._id}>
              {option.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

CheckBoxSelect.propTypes = {
  selectOptions: PropTypes.array,
  currentlySelected: PropTypes.array,
  onCheck: PropTypes.func
};

export default CheckBoxSelect;
