import React from "react";
import "./SearchResults.css";

function SearchResults({ results, onClear }) {
  if (results === null) return null;

  return (
    <section id="search-results" className="search_results" aria-live="polite">
      <div className="search_results_message">
        <p className="search_results_eyebrow">LISTINGS NOT CONNECTED</p>
        <h2>Search is ready for listing data.</h2>
        <p>
          The photos on this page are galleries only. There are no listing records
          with verified locations, prices, or home details to search yet.
        </p>
        <button className="search_results_clear" type="button" onClick={onClear}>
          Clear Search
        </button>
      </div>
    </section>
  );
}

export default SearchResults;
