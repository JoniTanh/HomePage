import React, { useState, useEffect } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import storageService from "../../services/storageServices";

export default function AngularWeather() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const projectName = "angularWeather";
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
        title="Angular Weather App"
        description="Tosi pitkä teksti"
        images={images}
      />
    </>
  );
}
