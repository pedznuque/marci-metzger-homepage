import React from "react";
import { FaSearch, FaLaptopHouse, FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import "./SearchContainer.css";

function SearchContainer({ filters, onFilterChange, onSearch }) {
  return (
    <form
      className="search_container"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <div className="search_component search_bar">
        <FaSearch size={20} aria-hidden="true" />
        <input
          type="search"
          value={filters.location}
          onChange={(event) => onFilterChange("location", event.target.value)}
          placeholder="City, ZIP, or Address"
          aria-label="City, ZIP, or Address"
        />
      </div>

      <div className="search_component">
        <FaLaptopHouse size={20} aria-hidden="true" />
        <select
          value={filters.type}
          onChange={(event) => onFilterChange("type", event.target.value)}
          aria-label="Property Type"
        >
          <option value="">All Types</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhome">Townhome</option>
          <option value="land">Land</option>
        </select>
      </div>

      <div className="search_component">
        <IoIosBed size={20} aria-hidden="true" />
        <select
          value={filters.bedrooms}
          onChange={(event) => onFilterChange("bedrooms", event.target.value)}
          aria-label="Minimum bedrooms"
        >
          <option value="">Beds</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="search_component">
        <FaBath size={20} aria-hidden="true" />
        <select
          value={filters.bathrooms}
          onChange={(event) => onFilterChange("bathrooms", event.target.value)}
          aria-label="Minimum bathrooms"
        >
          <option value="">Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <button className="search_component search_button" type="submit">
        <FaSearch size={20} aria-hidden="true" />
        Search Now
      </button>
    </form>
  );
}

export default SearchContainer;
