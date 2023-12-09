import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function ReactQuiz() {
  const [images, setImages] = useState([]);
  useFetchImages("reactQuiz", setImages);

  return (
    <>
      <ProjectDescription
        title="React Quiz"
        description={[
          "This application is a quiz game themed around the 10% club. The main difference from a traditional trivia game is that this game provides users with multiple-choice answers to the questions. Players have a limited time to respond to each question, adding excitement and challenge to the game",
          "When a user selects an answer, the application immediately informs whether the response was correct or incorrect. At the end of the game, it provides a summary showing how many questions were answered correctly, how many incorrectly, and how many were not answered at all (i.e., time ran out before the user could respond)",
          "This quiz game offers a fun and interactive way to test knowledge and quick thinking under time pressure.",
        ]}
        images={images}
        technologies="React, Tailwind, Vite"
        githubLink="https://github.com/JoniTanh/React-Quiz-App"
      />
    </>
  );
}
