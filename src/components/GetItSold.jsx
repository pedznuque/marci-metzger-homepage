import React from "react";
import interiorPhoto from "../assets/service-one.png";
import homePhoto from "../assets/service-two.png";
import buyerPhoto from "../assets/service-three.png";
import "./GetItSold.css";

const salesHighlights = [
  {
    title: "Top Residential Sales Last 5 Years",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    image: interiorPhoto,
    alt: "Bright kitchen in a home for sale",
  },
  {
    title: "Don't Just List it...",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    image: homePhoto,
    alt: "Modern home with landscaped grounds",
  },
  {
    title: "Guide to Buyers",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    image: buyerPhoto,
    alt: "Home buyers meeting with a real estate professional",
  },
];

function GetItSold() {
  return (
    <section id="get-it-sold" className="get_it_sold" aria-labelledby="get-it-sold-title">
      <header className="get_it_sold_heading">
        <p>SELL WITH CONFIDENCE</p>
        <h2 id="get-it-sold-title">Get it sold.</h2>
      </header>
      <div className="get_it_sold_rows">
        {salesHighlights.map(({ title, description, image, alt }) => (
          <article className="get_it_sold_row" key={title}>
            <img src={image} alt={alt} />
            <div className="get_it_sold_copy">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GetItSold;
