import { useState, useEffect, useRef } from "react";

import AngularWeather from "./Projects/AngularWeather";
import AngulareCommerce from "./Projects/AngulareCommerce";
import FamilyTree from "./Projects/FamilyTree";
import ReactQuiz from "./Projects/ReactQuiz";
import ReacteCommerce from "./Projects/ReacteCommerce";
import VueMusic from "./Projects/VueMusic";

const projectNames = [
  "FamilyTree",
  "ReacteCommerce",
  "ReactQuiz",
  "AngulareCommerce",
  "AngularWeather",
  "VueMusic",
];

export default function () {
  const [loadedProjects, setLoadedProjects] = useState([projectNames[0]]);
  const observerRef = useRef(null);

  const projectComponents = {
    FamilyTree: <FamilyTree />,
    ReacteCommerce: <ReacteCommerce />,
    ReactQuiz: <ReactQuiz />,
    AngulareCommerce: <AngulareCommerce />,
    AngularWeather: <AngularWeather />,
    VueMusic: <VueMusic />,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setLoadedProjects((currentProjects) => {
          const nextProjectIndex = currentProjects.length;
          if (nextProjectIndex < projectNames.length) {
            const nextProjectName = projectNames[nextProjectIndex];
            observerRef.current.unobserve(entry.target);
            return [...currentProjects, nextProjectName];
          }
          return currentProjects;
        });
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const currentLastElement = document.querySelector(
      ".observeMe:not(.loaded)"
    );
    if (currentLastElement) {
      observerRef.current.observe(currentLastElement);
    }

    return () => {
      observerRef.current.disconnect();
    };
  }, [loadedProjects]);

  return (
    <>
      <div className="text-gray-500 sourceCodePro">
        <div className="mx-auto my-36 px-8 md:px-20 lg:pl-16 xl:pl-40">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="w-full">
              <div className="text-2xl lg:text-5xl">Projects.</div>
              <div className="pt-8 max-w-3xl mb-20">
                Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä
                tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti
                tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä.
                Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä
                tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti
                tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä.
                Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä
                tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti
                tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä.
                Teksti tekstiä tekstiä.
              </div>
              <div>
                {loadedProjects.map((projectName, index) => (
                  <div
                    key={projectName}
                    className={
                      index === loadedProjects.length - 1
                        ? "observeMe"
                        : "loaded"
                    }
                  >
                    {projectComponents[projectName]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
