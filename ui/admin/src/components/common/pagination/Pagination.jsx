import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";

const Pagination = props => {
  const { pagination, route, callback } = props;
  let { numPages, limit, offset } = pagination;
  const [pages, setPages] = useState([]);

  const handleClick = e => {
    if (e.target.id === "next") {
      offset++;
    } else if (e.target.id === "prev") {
      offset--;
    } else {
      offset = e.target.id.split("-")[1];
    }
    console.log(props);
    callback({ route, limit, offset });
  };

  const createPageButtons = () => {
    let start;
    let stop;
    if (offset > 5) {
      start = offset - 5;
      stop = offset + 5;
    } else {
      start = 0;
      stop = 10;
    }
    const newPages = [];
    for (let idx = start; idx < stop; idx++) {
      newPages.push(
        <li className="page-item">
          <a
            className={`page-link btn d-none d-sm-block ${
              idx === offset ? "disabled border rounded-circle" : "active"
            } `}
            id={`page-${idx}`}
            href="#"
            onClick={handleClick}
          >
            {idx + 1}
          </a>
        </li>
      );
    }
    return newPages;
  };

  useEffect(() => {
    const newPages = createPageButtons();
    setPages(newPages);
  }, [pagination.offset]);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className={`page-link btn ${
              offset - 1 >= 0 ? "active" : "disabled"
            }`}
            id="prev"
            onClick={handleClick}
            href=""
          >
            <i className="fas fa-chevron-circle-left"></i>
          </a>
        </li>
        {pages}
        <li className="page-item">
          <a
            className={`page-link btn ${
              offset + 1 <= numPages ? "active" : "disabled"
            }`}
            id="next"
            onClick={handleClick}
            href="#"
          >
            <i className="fas fa-chevron-circle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
