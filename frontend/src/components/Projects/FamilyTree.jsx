import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function FamilyTree() {
  const [images, setImages] = useState([]);
  useFetchImages("familyTree", setImages);

  return (
    <>
      <ProjectDescription
        title="Family Tree"
        description={[
          "This application is designed to support genealogical research and serve as a source of information. In the application, you can edit, add, and delete information such as notes, individuals, and family trees. It enables you to create and manage families, build family trees, and see the locations of individuals' birth towns or places on a map.",
          "The application is equipped with a login feature, and registration can currently be done, for example, through Postman. Features that enhance usability, such as filtering, pagination, and a search function, make managing and navigating information smooth. Additionally, the application offers the ability to print personal information and family trees.",
          "Originally, this application was created for my mother to make it easier for her to continue her genealogical research and gather information in one place.",
        ]}
        images={images}
        technologies="React, Node.js, MongoDB, Bootstrap, Digital Ocean"
        githubLink="https://github.com/JoniTanh/FamilyTreeApp"
        note={true}
        noteText="Note: The persons in the images are products of imagination."
      />
    </>
  );
}
