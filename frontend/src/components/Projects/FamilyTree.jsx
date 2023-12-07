import ProjectDescription from "../UI/ProjectDescription";

import image1 from "../../assets/projects/family-tree/loginpage.png";
import image2 from "../../assets/projects/family-tree/homepage.png";
import image3 from "../../assets/projects/family-tree/peoplepage.png";
import image4 from "../../assets/projects/family-tree/familytablespage.png";
import image5 from "../../assets/projects/family-tree/familiespage.png";
import image6 from "../../assets/projects/family-tree/familytreepage.png";
import image7 from "../../assets/projects/family-tree/mappage.png";
import image8 from "../../assets/projects/family-tree/addperson.png";
import image9 from "../../assets/projects/family-tree/searchpage.png";

export default function FamilyTree() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
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
