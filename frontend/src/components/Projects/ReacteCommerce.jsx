import { useState } from "react";
import ProjectDescription from "../UI/ProjectDescription";
import useFetchImages from "../../hooks/useFetchImages";

export default function ReacteCommerce() {
  const [images, setImages] = useState([]);
  useFetchImages("reacteCommerce", setImages);

  return (
    <>
      <ProjectDescription
        title="React e-Commerce"
        description={[
          "This application is a RuneScape-themed online store. Users can browse through various products related to the RuneScape game. Adding products to the shopping cart is possible, and in the cart, users can modify their order by adding or removing products.",
          "Once products are added to the shopping cart, users can proceed to the checkout phase. At this stage, the order is submitted, and users are notified whether the order was successful or not. All orders are currently saved in a JSON file.",
          "The application provides basic features for managing an online store, including browsing product selections, managing the shopping cart, and the ordering process.",
        ]}
        images={images}
        technologies="React, Node.js, Tailwind, Vite"
        githubLink="https://github.com/JoniTanh/React-eCommerce"
      />
    </>
  );
}
