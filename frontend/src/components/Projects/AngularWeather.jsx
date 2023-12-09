import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function AngularWeather() {
  const [images, setImages] = useState([]);
  useFetchImages("angularWeather", setImages);

  return (
    <>
      <ProjectDescription
        title="Angular Weather"
        description={[
          "The Weather App is a versatile tool that provides detailed weather forecasts and historical weather conditions. Users can add and manage different cities, assigning each a unique information text and storing their weather data by date. The app enables the recording of temperature (°C), rainfall (mm), and wind speed (m/s), as well as the editing or deletion of these data as needed.",
          "This application serves as a comprehensive weather data management tool. It integrates with the Chart.js library for visualizations, helping users understand weather trends over time. Additionally, it includes integration with the OpenWeather API (free version) for real-time weather information from any location.",
        ]}
        images={images}
        technologies="Angular, ASP.NET, C#, SQLite, Tailwind"
        githubLink="https://github.com/JoniTanh/Angular-Weather-App"
      />
    </>
  );
}
