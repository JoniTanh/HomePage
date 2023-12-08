import React, { useState, useEffect } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import storageService from "../../services/storageServices";

export default function ReacteCommerce() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const projectName = "reacteCommerce";
        const imagesData = await storageService.getImages(projectName);
        setImages(imagesData.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <>
      <ProjectDescription
        title="React eCommerce App"
        description="Tosi pitkä teksti"
        images={images}
      />
    </>
  );
}
