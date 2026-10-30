import React from "react";
import cover from "../assets/cover.png";
import SearchContainer from "./SearchContainer";
import "./CoverContainer.css";

function CoverContainer({ filters, onFilterChange, onSearch }) {
  return (
    <>
      <section className="cover_container" aria-label="Featured property search">
        <img src={cover} alt="Scenic property landscape" />
        <div className="cover_content">
          <div className="cover_text_container">
            <p className="cover_eyebrow">MARCI METZGER HOMES</p>
            <h1>Find a place to call home.</h1>
            <p>Pahrump Realtor offering local expertise and personal guidance for your next move.</p>
            <a className="cover_call_button" href="tel:+12069196886">Call Now</a>
          </div>
        </div>
        <SearchContainer
          filters={filters}
          onFilterChange={onFilterChange}
          onSearch={onSearch}
        />
      </section>
    </>
  );
}

export default CoverContainer;
