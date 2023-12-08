import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function AngularECommerce() {
  const [images, setImages] = useState([]);
  useFetchImages("angulareCommerce", setImages);

  return (
    <>
      <ProjectDescription
        title="Angular eCommerce App"
        description="Tosi pitkä teksti"
        images={images}
      />
    </>
  );
}
