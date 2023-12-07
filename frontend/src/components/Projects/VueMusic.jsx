import ProjectDescription from "../UI/ProjectDescription";

import image1 from "../../assets/projects/vue-music/homepage.png";
import image2 from "../../assets/projects/vue-music/registermodal.png";
import image3 from "../../assets/projects/vue-music/managepage.png";
import image4 from "../../assets/projects/vue-music/musicpage.png";
import image5 from "../../assets/projects/vue-music/bg-selector.png";

export default function VueMusic() {
  const images = [image1, image2, image3, image4, image5];
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
