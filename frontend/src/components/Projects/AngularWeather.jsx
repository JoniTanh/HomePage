import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function AngularWeather() {
  const [images, setImages] = useState([]);
  useFetchImages("angularWeather", setImages);

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
