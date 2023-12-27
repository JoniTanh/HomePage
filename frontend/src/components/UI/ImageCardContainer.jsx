import React from "react";
import ImageCard from "./ImageCard.jsx";
import styles from "../../assets/imageCard.module.css";
import imageListData from "../../data/imageListData.js";

const ImageCardContainer = () => {
  return (
    <div className={styles.imageCardContainer}>
      {imageListData.map((img) => (
        <ImageCard
          key={img.src}
          image={img.src}
          title={img.title}
          description={img.description}
          overlayText={img.overlay}
          imageQuery={img.imageQuery}
        />
      ))}
    </div>
  );
};

export default ImageCardContainer;
