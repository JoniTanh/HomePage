import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function PlanetApp() {
  const [images, setImages] = useState([]);
  useFetchImages("planetApp", setImages);

  return (
    <>
      <ProjectDescription
        title="Planet App"
        description={["Coming soon.."]}
        images={images}
        technologies="React, Node.js, Arwes UI, Emotion"
        githubLink="https://github.com/JoniTanh/PlanetApp"
      />
    </>
  );
}
