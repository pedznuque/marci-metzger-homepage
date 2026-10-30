import React, { useEffect, useState } from "react";
import { IoArrowForward, IoChevronBack, IoChevronForward } from "react-icons/io5";
import galleryOne from "../assets/photo-gallery-one.png";
import galleryTwo from "../assets/photo-gallery-two.png";
import galleryThree from "../assets/photo-gallery-three.png";
import galleryFour from "../assets/photo-gallery-four.png";
import galleryFive from "../assets/photo-gallery-five.png";
import gallerySix from "../assets/photo-gallery-six.png";
import gallerySeven from "../assets/photo-gallery-seven.png";
import "./FeaturedProperties.css";

const galleries = [
  { id: 1, images: [galleryOne, galleryTwo, galleryThree] },
  { id: 2, images: [galleryFour, galleryFive] },
  { id: 3, images: [gallerySix, gallerySeven] },
];
const galleryPhotos = galleries.flatMap(({ id, images }) =>
  images.map((image, index) => ({ image, galleryId: id, photoNumber: index + 1 })),
);

function FeaturedProperties() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const activePhoto = activeImageIndex === null ? null : galleryPhotos[activeImageIndex];

  useEffect(() => {
    if (activeImageIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImageIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveImageIndex((index) => (index - 1 + galleryPhotos.length) % galleryPhotos.length);
      }
      if (event.key === "ArrowRight") {
        setActiveImageIndex((index) => (index + 1) % galleryPhotos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  return (
    <section id="listings" className="featured_properties" aria-labelledby="featured-properties-title">
      <div className="featured_properties_inner">
        <div className="featured_properties_header">
          <div>
            <p className="featured_properties_eyebrow">FIND YOUR DREAM HOME</p>
            <h2 id="featured-properties-title">Homes for every lifestyle.</h2>
            <p className="featured_properties_intro">
              From cozy starter homes to spacious ranches, find the perfect home in Pahrump Valley.
            </p>
          </div>
          <button className="view_all_listings" type="button" onClick={() => setActiveImageIndex(0)}>
            View All Listings <IoArrowForward aria-hidden="true" />
          </button>
        </div>

        <h3 className="property_gallery_heading">Photo Gallery</h3>
        <div className="property_gallery_grid">
          {galleries.map(({ id, images }) => (
            <article className="property_gallery_card" key={id}>
              <div className={`property_gallery property_gallery--${images.length}`}>
                {images.map((image, index) => (
                  <button
                    className={`property_gallery_image_button property_gallery_image_button_${index + 1}`}
                    key={image}
                    type="button"
                    onClick={() => setActiveImageIndex(galleryPhotos.findIndex((photo) => photo.image === image))}
                    aria-label={`View Pahrump Valley home gallery ${id}, photo ${index + 1}`}
                  >
                    <img
                      className="property_gallery_image"
                      src={image}
                      alt={`Pahrump Valley home gallery ${id}, photo ${index + 1}`}
                    />
                  </button>
                ))}
                <span className="gallery_placeholder_label">View photos</span>
              </div>
              <p className="property_gallery_caption">Property gallery {String(id).padStart(2, "0")}</p>
            </article>
          ))}
        </div>
      </div>
      {activePhoto && (
        <div className="photo_lightbox_backdrop" onClick={() => setActiveImageIndex(null)}>
          <div
            className="photo_lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Property photo gallery"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="photo_lightbox_image_wrap">
              <img src={activePhoto.image} alt={`Pahrump Valley property gallery ${activePhoto.galleryId}, photo ${activePhoto.photoNumber}`} />
              <button
                className="photo_lightbox_arrow photo_lightbox_previous"
                type="button"
                onClick={() => setActiveImageIndex((activeImageIndex - 1 + galleryPhotos.length) % galleryPhotos.length)}
                aria-label="Previous photo"
              >
                <IoChevronBack aria-hidden="true" />
              </button>
              <button
                className="photo_lightbox_arrow photo_lightbox_next"
                type="button"
                onClick={() => setActiveImageIndex((activeImageIndex + 1) % galleryPhotos.length)}
                aria-label="Next photo"
              >
                <IoChevronForward aria-hidden="true" />
              </button>
              <span className="photo_lightbox_count">{activeImageIndex + 1} / {galleryPhotos.length}</span>
              <button
                className="photo_lightbox_close"
                type="button"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close photo viewer"
              >
                {String.fromCharCode(215)}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProperties;
