import React from "react";
import serviceOne from "../assets/service-one.png";
import serviceTwo from "../assets/service-two.png";
import serviceThree from "../assets/service-three.png";
import "./ServicesContainer.css";

const services = [
  {
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: serviceOne,
    alt: "Bright interior of a Pahrump Valley home",
  },
  {
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    image: serviceTwo,
    alt: "A home in the Pahrump Valley landscape",
  },
  {
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    image: serviceThree,
    alt: "Marci Metzger, local real estate professional",
  },
];

function ServicesContainer() {
  return (
    <section id="services" className="services_section" aria-labelledby="services-title">
      <div className="services_inner">
        <header className="services_heading">
          <p>OUR SERVICES</p>
          <h2 id="services-title">Guidance for every move.</h2>
          <span>Thoughtful local support from your first search through closing day.</span>
        </header>

        <div className="services_grid">
          {services.map(({ title, description, image, alt }) => (
            <article className="service_card" key={title}>
              <img className="service_image" src={image} alt={alt} />
              <div className="service_card_content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesContainer;
