import { useEffect } from "react";
import storageService from "../services/storageServices";

const useFetchImages = (projectName, setImages) => {
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesData = await storageService.getImages(projectName);
        imagesData.sort((a, b) => a.order - b.order);
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [projectName, setImages]);
};

export default useFetchImages;
