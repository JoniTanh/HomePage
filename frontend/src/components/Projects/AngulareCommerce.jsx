import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function AngularECommerce() {
  const [images, setImages] = useState([]);
  useFetchImages("angulareCommerce", setImages);

  return (
    <>
      <ProjectDescription
        title="Angular e-Commerce"
        description={[
          "This application is a RuneScape-themed online store that allows users to browse products by different categories and search for products using keywords. Users can add their desired products to the shopping cart and modify their orders in the cart by adding or removing items.",
          "Once products are added to the cart, users can proceed to the checkout phase, where they can submit their orders. Users can view their own orders on the 'orders' page. The application features login through OKTA, ensuring the security of user information and a smooth login experience.",
          "All products, orders, and other data are stored in a MySQL database, enabling efficient and secure data management.",
        ]}
        images={images}
        technologies="Angular, Java Spring Boot, MySQL, Okta, IntelliJ, MySQL Workbench, MySQL Server"
        githubLink="https://github.com/JoniTanh/Angular-eCommerce"
      />
    </>
  );
}
