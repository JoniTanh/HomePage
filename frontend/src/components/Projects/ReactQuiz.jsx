import ProjectDescription from "../UI/ProjectDescription";

import image1 from "../../assets/projects/react-quiz/firstquestion.png";
import image2 from "../../assets/projects/react-quiz/answered.png";
import image3 from "../../assets/projects/react-quiz/rightanswer.png";
import image4 from "../../assets/projects/react-quiz/wronganswer.png";
import image5 from "../../assets/projects/react-quiz/results.png";
import image6 from "../../assets/projects/react-quiz/resultstwo.png";

export default function ReactQuiz() {
  const images = [image1, image2, image3, image4, image5, image6];
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
