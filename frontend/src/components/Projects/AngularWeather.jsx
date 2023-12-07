import ProjectDescription from "../UI/ProjectDescription";

import image1 from "../../assets/projects/angular-weather/managepage.png";
import image2 from "../../assets/projects/angular-weather/myweatherpage.png";
import image3 from "../../assets/projects/angular-weather/openweatherapi.png";
import image4 from "../../assets/projects/angular-weather/addweather.png";

export default function AngularWeather() {
  const images = [image1, image2, image3, image4];
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
