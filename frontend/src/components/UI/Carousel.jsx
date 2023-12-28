import React, { useState, useRef } from "react";
import styles from "../../assets/carousel.module.css";
import classNames from "classnames";
import ImageModal from "./ImageModal";

const Carousel = ({ images, projectId }) => {
  const dialog = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [projectId]);

  const goToPrevious = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const goToNext = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const openModal = () => {
    dialog.current.open();
  };

  // TODO:
  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  const currentImage = images[currentSlide] ? images[currentSlide].url : null;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselImages}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            className={classNames(styles.carouselImage, {
              [styles.active]: index === currentSlide,
            })}
            alt={`${image.name} Slide ${index + 1}`}
            onClick={openModal}
          />
        ))}
      </div>
      <button
        className={classNames(styles.carouselButton, styles.prev)}
        onClick={goToPrevious}
      >
        {"< Prev"}
      </button>
      <button
        className={classNames(styles.carouselButton, styles.next)}
        onClick={goToNext}
      >
        {"Next >"}
      </button>
      <ImageModal
        ref={dialog}
        imageSrc={currentImage}
        onPrev={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
};

export default Carousel;
