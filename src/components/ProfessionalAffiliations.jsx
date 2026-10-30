import React from "react";
import ridgeLogo from "../assets/PA-one.png";
import fairHousingLogo from "../assets/PA-two.png";
import realtorLogo from "../assets/PA-three.png";
import chamberLogo from "../assets/PA-four.png";
import "./ProfessionalAffiliations.css";

const affiliations = [
  { name: "The Ridge Realty Group", image: ridgeLogo },
  { name: "Equal Housing Opportunity", image: fairHousingLogo },
  { name: "REALTOR®", image: realtorLogo },
  { name: "Pahrump Valley Chamber of Commerce", image: chamberLogo },
];

function ProfessionalAffiliations() {
  return (
    <section className="professional_affiliations" aria-labelledby="professional-affiliations-title">
      <div className="professional_affiliations_inner">
        <div className="professional_affiliations_heading">
          <p>PROFESSIONAL AFFILIATIONS</p>
          <h2 id="professional-affiliations-title">Trusted connections. Local expertise.</h2>
        </div>
        <div className="professional_affiliations_logos">
          {affiliations.map(({ name, image }) => (
            <div className="affiliation_logo" key={name}>
              <img src={image} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalAffiliations;
