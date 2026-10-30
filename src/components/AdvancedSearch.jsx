import React from "react";
import { FaSearch, FaLaptopHouse, FaBath, FaDollarSign, FaSortAmountDown } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import "./AdvancedSearch.css";

function AdvancedSearch({ filters, onFilterChange, onSearch }) {
  return (
    <section id="advanced-search" className="advanced_search_section" aria-labelledby="advanced-search-title">
      <div className="advanced_search_inner">
        <div className="advanced_search_heading">
          <p className="advanced_search_eyebrow">SEARCH LISTINGS</p>
          <h2 id="advanced-search-title">Find Your Dream Home</h2>
          <p>Set your preferences to narrow down your home search.</p>
        </div>

        <form className="advanced_search_form" onSubmit={(event) => { event.preventDefault(); onSearch(); }}>
          <label className="advanced_search_field advanced_search_location">
            <span>Location</span>
            <div className="advanced_search_control">
              <FaSearch aria-hidden="true" />
              <input name="location" type="text" value={filters.location} onChange={(event) => onFilterChange("location", event.target.value)} placeholder="City, ZIP, or neighborhood" />
            </div>
          </label>

          <label className="advanced_search_field">
            <span>Property type</span>
            <div className="advanced_search_control">
              <FaLaptopHouse aria-hidden="true" />
              <select name="type" value={filters.type} onChange={(event) => onFilterChange("type", event.target.value)}>
                <option value="">Any type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhome">Townhome</option>
                <option value="land">Land</option>
              </select>
            </div>
          </label>

          <label className="advanced_search_field">
            <span>Minimum price</span>
            <div className="advanced_search_control">
              <FaDollarSign aria-hidden="true" />
              <select name="minPrice" value={filters.minPrice} onChange={(event) => onFilterChange("minPrice", event.target.value)}>
                <option value="">No minimum</option>
                <option value="100000">$100,000</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
              </select>
            </div>
          </label>

          <label className="advanced_search_field">
            <span>Maximum price</span>
            <div className="advanced_search_control">
              <FaDollarSign aria-hidden="true" />
              <select name="maxPrice" value={filters.maxPrice} onChange={(event) => onFilterChange("maxPrice", event.target.value)}>
                <option value="">No maximum</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
                <option value="750000">$750,000</option>
                <option value="1000000">$1,000,000+</option>
              </select>
            </div>
          </label>

          <label className="advanced_search_field">
            <span>Bedrooms</span>
            <div className="advanced_search_control">
              <IoIosBed aria-hidden="true" />
              <select name="bedrooms" value={filters.bedrooms} onChange={(event) => onFilterChange("bedrooms", event.target.value)}>
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </label>

          <label className="advanced_search_field">
            <span>Bathrooms</span>
            <div className="advanced_search_control">
              <FaBath aria-hidden="true" />
              <select name="bathrooms" value={filters.bathrooms} onChange={(event) => onFilterChange("bathrooms", event.target.value)}>
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </label>

          <label className="advanced_search_field">
            <span>Sort by</span>
            <div className="advanced_search_control">
              <FaSortAmountDown aria-hidden="true" />
              <select name="sort" value={filters.sort} onChange={(event) => onFilterChange("sort", event.target.value)}>
                <option value="newest">Newest</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="beds-low">Bedrooms: low to high</option>
                <option value="beds-high">Bedrooms: high to low</option>
                <option value="baths-low">Bathrooms: low to high</option>
                <option value="baths-high">Bathrooms: high to low</option>
              </select>
            </div>
          </label>

          <button className="advanced_search_submit" type="submit">
            <FaSearch aria-hidden="true" /> Search Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdvancedSearch;
