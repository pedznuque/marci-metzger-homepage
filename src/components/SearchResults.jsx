import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./SearchResults.css";

function SearchResults({ results, onClose }) {
  useEffect(() => {
    if (results === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [results, onClose]);

  if (results === null) return null;

  return (
    <div className="search_results" onClick={onClose}>
      <section
        id="search-results"
        className="search_results_message"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-results-title"
        aria-describedby="search-results-description"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="search_results_close_icon" type="button" onClick={onClose} aria-label="Close search notice">
          <IoClose aria-hidden="true" />
        </button>
        <p className="search_results_eyebrow">LISTINGS NOT CONNECTED</p>
        <h2 id="search-results-title">Search is ready for listing data.</h2>
        <p id="search-results-description">
          The photos on this page are galleries only. There are no listing records
          with verified locations, prices, or home details to search yet.
        </p>
        <button className="search_results_clear" type="button" onClick={onClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default SearchResults;
