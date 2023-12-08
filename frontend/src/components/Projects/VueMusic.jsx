import React, { useState, useEffect } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import storageService from "../../services/storageServices";

export default function VueMusic() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const projectName = "vueMusic";
        const imagesData = await storageService.getImages(projectName);
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <ProjectDescription
        title="Vue Music App"
        description="Tosi pitkä teksti"
        images={images}
      />
    </>
  );
}
