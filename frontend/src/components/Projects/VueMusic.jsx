import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function VueMusic() {
  const [images, setImages] = useState([]);
  useFetchImages("vueMusic", setImages);

  return (
    <>
      <ProjectDescription
        title="Vue Music"
        description={[
          "The Vue Music App is a dynamic and user-friendly platform designed for music enthusiasts. Built with Vue 3 and Vite, this app provides a seamless experience for engaging with music in various ways. Whether it’s exploring new tunes, managing your music library, or connecting with other music lovers, the app offers a range of features to enhance your music experience.",
          "The app includes user authentication, ensuring secure sign-in and sign-out. The registration process is easy and quick. Music playback allows users to access a wide range of music, and there’s also an option to download your favorite tracks. Users can choose the app's language between Finnish and English, catering to a broader audience. Additionally, users have the option to change the background image on the music page from a selection of different options, personalizing their experience. User interaction is a key part of the app, as you can comment on tracks and engage with the community. Furthermore, content management features allow users to delete or modify their own songs.",
        ]}
        images={images}
        technologies="Vue, Firebase, Tailwind, Pinia"
        githubLink="https://github.com/JoniTanh/Vue-Music-App"
      />
    </>
  );
}
