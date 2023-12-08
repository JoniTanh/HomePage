import axios from "axios";

const baseUrl = "http://localhost:3001/api/images";

const imageCache = new Map();

const getImages = async (projectName) => {
  if (imageCache.has(projectName)) {
    return imageCache.get(projectName);
  }

  const response = await axios.get(`${baseUrl}/${projectName}`);
  const images = response.data;

  imageCache.set(projectName, images);

  return images;
};

export default { getImages };
