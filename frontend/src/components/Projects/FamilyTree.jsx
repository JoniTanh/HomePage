import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function FamilyTree() {
  const [images, setImages] = useState([]);
  useFetchImages("familyTree", setImages);

  return (
    <>
      <ProjectDescription
        title="Family Tree App"
        description="Tosi pitkä teksti"
        images={images}
      />
    </>
  );
}
