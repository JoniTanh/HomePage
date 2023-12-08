import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function ReacteCommerce() {
  const [images, setImages] = useState([]);
  useFetchImages("reacteCommerce", setImages);

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
