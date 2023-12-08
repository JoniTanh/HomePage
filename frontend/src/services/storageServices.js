import axios from "axios";

const baseUrl = "http://localhost:3001/api";
const imageCache = new Map();

const getImages = async (projectName) => {
  if (imageCache.has(projectName)) {
    return imageCache.get(projectName);
  }

  try {
    const response = await axios.get(`${baseUrl}/images`, {
      params: { project: projectName },
    });
    const images = response.data;

    imageCache.set(projectName, images);
    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

const getLogos = async () => {
  const cacheKey = "logos";

  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }

  try {
    const response = await axios.get(`${baseUrl}/logos`);
    const logos = response.data;

    imageCache.set(cacheKey, logos);
    return logos;
  } catch (error) {
    console.error("Error fetching logos:", error);
    throw error;
  }
};

export default { getImages, getLogos };
