import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/imageCard.module.css";

const ImageCard = ({ image, title, description, overlayText, imageQuery }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/portfolio/${imageQuery}`);
  };

  return (
    <div
      className={`${styles.imageCard} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {overlayText && <div className={styles.overlayText}>{overlayText}</div>}
      <img src={image} loading="lazy" alt={title} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
