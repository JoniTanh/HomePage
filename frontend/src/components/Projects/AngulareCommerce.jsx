import ProjectDescription from "../UI/ProjectDescription";

import image1 from "../../assets/projects/angular-eCommerce/armourpage.png";
import image2 from "../../assets/projects/angular-eCommerce/cartpage.png";
import image3 from "../../assets/projects/angular-eCommerce/checkoutpage.png";
import image4 from "../../assets/projects/angular-eCommerce/checkoutpagetwo.png";
import image5 from "../../assets/projects/angular-eCommerce/orderspage.png";

export default function AngulareCommerce() {
  const images = [image1, image2, image3, image4, image5];
  return (
    <>
      <ProjectDescription
        title="Angular eCommerce App"
        description="Tosi pitkä teksti"
        images={images}
      />
    </>
  );
}
