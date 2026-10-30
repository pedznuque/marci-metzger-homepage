import React, { useState } from "react";
import "./Home.css";
import MainLayout from "../layouts/MainLayout";
import CoverContainer from "../components/CoverContainer";
import FeaturesContainer from "../components/FeaturesContainer";
import ProfileAndSold from "../components/ProfileAndSold";
import FeaturedProperties from "../components/FeaturedProperties";
import AdvancedSearch from "../components/AdvancedSearch";
import ProfessionalAffiliations from "../components/ProfessionalAffiliations";
import ServicesContainer from "../components/ServicesContainer";
import SocialMediaLinks from "../components/SocialMediaLinks";
import CallOrVisit from "../components/CallOrVisit";
import SearchResults from "../components/SearchResults";
const initialSearchFilters = {
  location: "",
  type: "",
  minPrice: "",
  maxPrice: "",
  bedrooms: "",
  bathrooms: "",
  sort: "newest",
};

function Home() {
  const [filters, setFilters] = useState(initialSearchFilters);
  const [searchResults, setSearchResults] = useState(null);

  const handleFilterChange = (name, value) => {
    setFilters((currentFilters) => ({ ...currentFilters, [name]: value }));
  };

  const handleSearch = () => {
    setSearchResults([]);
  };

  const handleCloseSearchNotice = () => {
    setSearchResults(null);
  };

  return (
    <div className="home_container" id="top">
      <MainLayout>
        <CoverContainer filters={filters} onFilterChange={handleFilterChange} onSearch={handleSearch} />
        <FeaturesContainer />
        <ProfileAndSold />
        <FeaturedProperties />
        <AdvancedSearch filters={filters} onFilterChange={handleFilterChange} onSearch={handleSearch} />
        <SearchResults results={searchResults} onClose={handleCloseSearchNotice} />
        <ProfessionalAffiliations />
        <ServicesContainer />
        <SocialMediaLinks />
        <CallOrVisit />
      </MainLayout>
    </div>
  );
}

export default Home;
