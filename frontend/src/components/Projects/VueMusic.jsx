import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function VueMusic() {
  const [images, setImages] = useState([]);
  useFetchImages("vueMusic", setImages);

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
