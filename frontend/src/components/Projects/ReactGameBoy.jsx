import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function ReactGameBoy() {
  const [images, setImages] = useState([]);
  useFetchImages("reactGameBoy", setImages);

  return (
    <>
      <ProjectDescription
        title="React GameBoy"
        description={[
          "Coming...",
          "A concept for the GameBoy, intended for possibly creating small playable games. It might still change into a React Native / Mobile application. Responsiveness is not yet fully functional. The buttons are clickable and the screen 'turns on' when the start button is pressed.",
        ]}
        images={images}
        technologies="React"
        githubLink="https://github.com/JoniTanh/React-GameBoy"
      />
    </>
  );
}
