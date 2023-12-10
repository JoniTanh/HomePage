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
        <div className="mx-auto my-20 sm:my-24 px-8 md:px-20 lg:pl-16 xl:pl-40">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="w-full text-justify">
              <div className="text-2xl lg:text-5xl text-blue-700">
                Portfolio.
              </div>
              <div className="pt-8 max-w-6xl mb-20">
                <div>
                  On this page, you will find some of my practice projects. Some
                  of them are still under development, evolving and changing
                  over time. Each project is its own separate entity, and
                  currently, I'm focusing on JavaScript technologies, such as
                  React, Angular, Vue, and Node in my work. However, my
                  intention in the future is to further expand my technical
                  knowledge and delve deeper into other programming languages
                  and technologies, such as Java, C#, and Python. I'm also
                  working on a game project with Unity.
                </div>
                <div className="pt-10">
                  <div className="mb-4 text-xl text-green-600">Website</div>
                  <div className="text-justify text-red-500">
                    Note: Education and work experience details are a work in
                    progress.
                  </div>
                  <div className="my-8">
                    <span className="text-orange-400">
                      Technologies & Tools:{" "}
                    </span>
                    <span>
                      React, Node.js, MongoDB, Tailwind, Vite, Digital Ocean
                    </span>
                  </div>
                  <div>
                    <span>GitHub repo: </span>
                    <a
                      className="text-blue-500 hover:text-blue-300"
                      href="https://github.com/JoniTanh/HomePage"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
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
