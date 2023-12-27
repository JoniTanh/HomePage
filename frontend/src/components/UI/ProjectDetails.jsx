import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../data/projectsData";
import Carousel from "./Carousel";
import useFetchImages from "../../hooks/useFetchImages";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [images, setImages] = useState([]);
  const project = projectsData[projectId];

  useFetchImages(project?.imageQuery, setImages);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <div className="sourceCodePro whiteColorBlackShadow">
        <div className="w-full xl:w-3/5 mx-auto px-10 my-20 sm:my-24">
          <div className="flex flex-col">
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
