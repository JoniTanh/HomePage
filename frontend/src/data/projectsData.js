const projectsData = {
  familyTree: {
    title: "Family Tree",
    imageQuery: "familyTree",
    description: [
      "This application is designed to support genealogical research and serve as a source of information. In the application, you can edit, add, and delete information such as notes, individuals, and family trees. It enables you to create and manage families, build family trees, and see the locations of individuals' birth towns or places on a map.",
      "The application is equipped with a login feature, and registration can currently be done, for example, through Postman. Features that enhance usability, such as filtering, pagination, and a search function, make managing and navigating information smooth. Additionally, the application offers the ability to print personal information and family trees.",
      "Originally, this application was created for my mother to make it easier for her to continue her genealogical research and gather information in one place.",
    ],
    images: [],
    technologies: "React, Node.js, MongoDB, Bootstrap, Digital Ocean",
    githubLink: "https://github.com/JoniTanh/FamilyTreeApp",
    note: true,
    noteText: "Note: The persons in the images are products of imagination.",
  },
  angulareCommerce: {
    title: "Angular e-Commerce",
    imageQuery: "angulareCommerce",
    description: [
      "This application is a RuneScape-themed online store that allows users to browse products by different categories and search for products using keywords. Users can add their desired products to the shopping cart and modify their orders in the cart by adding or removing items.",
      "Once products are added to the cart, users can proceed to the checkout phase, where they can submit their orders. Users can view their own orders on the 'orders' page. The application features login through OKTA, ensuring the security of user information and a smooth login experience.",
      "All products, orders, and other data are stored in a MySQL database, enabling efficient and secure data management.",
    ],
    images: [],
    technologies:
      "Angular, Java Spring Boot, MySQL, Okta, IntelliJ, MySQL Workbench, MySQL Server",
    githubLink: "https://github.com/JoniTanh/Angular-eCommerce",
  },
  angularWeather: {
    title: "Angular Weather",
    imageQuery: "angularWeather",
    description: [
      "The Weather App is a versatile tool that provides detailed weather forecasts and historical weather conditions. Users can add and manage different cities, assigning each a unique information text and storing their weather data by date. The app enables the recording of temperature (°C), rainfall (mm), and wind speed (m/s), as well as the editing or deletion of these data as needed.",
      "This application serves as a comprehensive weather data management tool. It integrates with the Chart.js library for visualizations, helping users understand weather trends over time. Additionally, it includes integration with the OpenWeather API (free version) for real-time weather information from any location.",
    ],
    images: [],
    technologies: "Angular, ASP.NET, C#, SQLite, Tailwind",
    githubLink: "https://github.com/JoniTanh/Angular-Weather-App",
  },
  planetApp: {
    title: "Planet App",
    imageQuery: "planetApp",
    description: ["Coming soon..."],
    images: [],
    technologies: "React, Node.js, Arwes UI, Emotion",
    githubLink: "https://github.com/JoniTanh/PlanetApp",
  },
  reacteCommerce: {
    title: "React e-Commerce",
    imageQuery: "reacteCommerce",
    description: [
      "This application is a RuneScape-themed online store. Users can browse through various products related to the RuneScape game. Adding products to the shopping cart is possible, and in the cart, users can modify their order by adding or removing products.",
      "Once products are added to the shopping cart, users can proceed to the checkout phase. At this stage, the order is submitted, and users are notified whether the order was successful or not. All orders are currently saved in a JSON file.",
      "The application provides basic features for managing an online store, including browsing product selections, managing the shopping cart, and the ordering process.",
    ],
    images: [],
    technologies: "React, Node.js, Tailwind, Vite",
    githubLink: "https://github.com/JoniTanh/React-eCommerce",
  },
  reactGameBoy: {
    title: "React GameBoy",
    imageQuery: "reactGameBoy",
    description: [
      "Coming...",
      "A concept for the GameBoy, intended for possibly creating small playable games. It might still change into a React Native / Mobile application. Responsiveness is not yet fully functional. The buttons are clickable and the screen 'turns on' when the start button is pressed.",
    ],
    images: [],
    technologies: "React",
    githubLink: "https://github.com/JoniTanh/React-GameBoy",
  },
  reactQuiz: {
    title: "React Quiz",
    imageQuery: "reactQuiz",
    description: [
      "This application is a quiz game themed around the 10% club. The main difference from a traditional trivia game is that this game provides users with multiple-choice answers to the questions. Players have a limited time to respond to each question, adding excitement and challenge to the game",
      "When a user selects an answer, the application immediately informs whether the response was correct or incorrect. At the end of the game, it provides a summary showing how many questions were answered correctly, how many incorrectly, and how many were not answered at all (i.e., time ran out before the user could respond)",
      "This quiz game offers a fun and interactive way to test knowledge and quick thinking under time pressure.",
    ],
    images: [],
    technologies: "React, Tailwind, Vite",
    githubLink: "https://github.com/JoniTanh/React-Quiz-App",
  },
  vueMusic: {
    title: "Vue Music",
    imageQuery: "vueMusic",
    description: [
      "The Vue Music App is a dynamic and user-friendly platform designed for music enthusiasts. Built with Vue 3 and Vite, this app provides a seamless experience for engaging with music in various ways. Whether it’s exploring new tunes, managing your music library, or connecting with other music lovers, the app offers a range of features to enhance your music experience.",
      "The app includes user authentication, ensuring secure sign-in and sign-out. The registration process is easy and quick. Music playback allows users to access a wide range of music, and there’s also an option to download your favorite tracks. Users can choose the app's language between Finnish and English, catering to a broader audience. Additionally, users have the option to change the background image on the music page from a selection of different options, personalizing their experience. User interaction is a key part of the app, as you can comment on tracks and engage with the community. Furthermore, content management features allow users to delete or modify their own songs.",
    ],
    images: [],
    technologies: "Vue, Firebase, Tailwind, Pinia",
    githubLink: "https://github.com/JoniTanh/Vue-Music-App",
  },
};

export default projectsData;
