

import React, { useState } from "react";
import "../../assets/css/Filters.css";

const Filters = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleFilters = () => {
    setShowMobileFilters((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  };
  

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 mt-1 ">
      <div className="filters">
        <button className="filter-button toggle-btn" onClick={toggleFilters}>
          <p className="hideandshow">{showMobileFilters ? "Hide Filters" : "Show Filters"}</p>
        </button>

        <div className={`filter-content ${showMobileFilters ? "show" : ""}`}>
          <div className="filter-header">
            <button className="filter-button">Filters</button>

            <button className="filter-button2">Categories</button>
          </div>

          <div className="selected-filters">
            <div className="filter-tag" id="more">
              30% or more ×
            </div>
            <div className="filter-tag" id="dry">
              Dry Fruits ×
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-column">
              <h4>CATEGORIES</h4>
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Curry powder
                </label>
                <label>
                  <input type="checkbox" /> Dry Fruits
                </label>
                <label>
                  <input type="checkbox" /> Snacks
                </label>
                <label>
                  <input type="checkbox" /> Breakfast Items
                </label>
                <label>
                  <input type="checkbox" /> Honey
                </label>
              </div>
            </div>
            <div className="filter-column">
              <h4 className="text-center">DISCOUNTS</h4>
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> 30% or more
                </label>
                <label>
                  <input type="checkbox" /> 40% or more
                </label>
                <label>
                  <input type="checkbox" /> 50% or more
                </label>
                <label>
                  <input type="checkbox" /> 60% or more
                </label>
                <label>
                  <input type="checkbox" /> 70% or more
                </label>
                <label>
                  <input type="checkbox" /> 80% or more
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
