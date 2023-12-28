import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../../data/projectsData";
import Carousel from "./Carousel";
import useFetchImages from "../../hooks/useFetchImages";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const projectQueries = Object.entries(projectsData)
    .map(([key, value]) => ({
      imageQuery: value.imageQuery,
    }))
    .sort((a, b) => a.imageQuery.localeCompare(b.imageQuery));

  const currentProjectIndex = projectQueries.findIndex(
    (p) => p.imageQuery === projectId
  );
  const project = projectsData[projectId];
  useFetchImages(project?.imageQuery, setImages);

  const previousProjectIndex =
    (currentProjectIndex - 1 + projectQueries.length) % projectQueries.length;
  const nextProjectIndex = (currentProjectIndex + 1) % projectQueries.length;

  const previousProjectQuery = projectQueries[previousProjectIndex].imageQuery;
  const nextProjectQuery = projectQueries[nextProjectIndex].imageQuery;
  const fallbackProjectQuery = projectQueries[0].imageQuery;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <div className="sourceCodePro whiteColorBlackShadow">
        <div className="w-full xl:w-3/5 mx-auto px-10 my-10 sm:my-12">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="mb-2 sm:mb-0">
              <button
                onClick={() => navigate("/portfolio")}
                className="bg-gray-500 hover:bg-gray-700 whiteColorBlackShadow font-bold py-2 px-4 rounded mb-2"
              >
                Back to Portfolio
              </button>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  const query = previousProjectQuery || fallbackProjectQuery;
                  navigate(`/portfolio/${query}`);
                }}
                className="bg-blue-500 hover:bg-blue-700 whiteColorBlackShadow font-bold py-2 px-4 rounded mb-2"
              >
                {"<"} Previous Project
              </button>
              <button
                onClick={() => {
                  const query = nextProjectQuery || fallbackProjectQuery;
                  navigate(`/portfolio/${query}`);
                }}
                className="bg-blue-500 hover:bg-blue-700 whiteColorBlackShadow font-bold py-2 px-4 rounded mb-2"
              >
                Next Project {">"}
              </button>
            </div>
          </div>
          <div className="flex flex-col my-10 sm:my-12">
            <div className="w-full text-justify">
              <div className="mb-4 text-2xl text-green-600">
                {project.title}
              </div>
              <div className="mb-6">
                {project.description.map((paragraph, index) => (
                  <div key={index} className="py-4 xl:pr-4">
                    {paragraph}
                  </div>
                ))}
                <div>
                  <div className="my-8">
                    <span className="text-orange-400">
                      Technologies & Tools:{" "}
                    </span>
                    <span>{project.technologies}</span>
                  </div>
                  <div>
                    <span>GitHub repo: </span>
                    <a
                      className="text-blue-500 hover:text-blue-300"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                {project.note && (
                  <div className="text-red-500">{project.noteText}</div>
                )}
              </div>
            </div>
            <div className="w-full xl:w-3/5 mx-auto mt-6 mb-8">
              <Carousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
