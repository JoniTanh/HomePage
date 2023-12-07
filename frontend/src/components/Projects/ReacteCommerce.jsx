import ProjectDescription from "../UI/ProjectDescription";

import image1 from "../../assets/projects/react-eCommerce/ge-page.png";
import image2 from "../../assets/projects/react-eCommerce/gepagetwo.png";
import image3 from "../../assets/projects/react-eCommerce/cartpage.png";
import image4 from "../../assets/projects/react-eCommerce/checkoutmodal.png";
import image5 from "../../assets/projects/react-eCommerce/successinformation.png";

export default function ReacteCommerce() {
  const images = [image1, image2, image3, image4, image5];
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
