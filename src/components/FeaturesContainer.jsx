import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import "./FeaturesContainer.css";

const features = [
  {
    Icon: LiaHomeSolid,
    title: "Exceptional Homes",
    description: "Explore carefully selected properties in the places you want to live.",
  },
  {
    Icon: IoPricetagsOutline,
    title: "Market Expertise",
    description: "Get clear, informed guidance on pricing and local market conditions.",
  },
  {
    Icon: RiCommunityLine,
    title: "Local Knowledge",
    description: "Find the neighborhood and community that feel right for you.",
  },
  {
    Icon: BsPerson,
    title: "Personal Service",
    description: "Receive thoughtful support through every step of your move.",
  },
];

function FeaturesContainer() {
  return (
    <section className="main_features_container" aria-labelledby="features-title">
      <div className="features_container">
        <header className="features_heading">
          <p className="features_eyebrow">THE MARCI METZGER DIFFERENCE</p>
          <h2 id="features-title">Your next move, made personal.</h2>
          <p>Expert local guidance and thoughtful service at every step of your real estate journey.</p>
        </header>

        <div className="features_grid">
          {features.map(({ Icon, title, description }) => (
            <article className="feature" key={title}>
              <div className="feature_icon" aria-hidden="true"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesContainer;
