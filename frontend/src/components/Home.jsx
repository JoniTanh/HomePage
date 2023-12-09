import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import LogoItem from "./UI/LogoItem";
import storageService from "../services/storageServices";
import TitleRotator from "./TitleRotator";

export default function Home() {
  const [logos, setLogos] = useState([]);
  const [linkedInLogo, setLinkedInLogo] = useState([]);
  const [githubLogo, setGitHubLogo] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        let logosData = await storageService.getLogos();

        const linkedInLogo = logosData.find((logo) =>
          logo.name.toLowerCase().includes("linkedin")
        );
        const githubLogo = logosData.find((logo) =>
          logo.name.toLowerCase().includes("github")
        );

        setLinkedInLogo(linkedInLogo);
        setGitHubLogo(githubLogo);

        logosData = logosData.filter(
          (logo) => logo !== linkedInLogo && logo !== githubLogo
        );

        logosData.sort((a, b) => a.name.localeCompare(b.name));

        setLogos(logosData);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchLogos();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-24">
          <SideBar githubLogo={githubLogo} linkedInLogo={linkedInLogo} />
        </div>
        <div className="flex-1 text-gray-500 sourceCodePro">
          <div className="pl-[120px] pr-[30px] md:px-[120px] mx-auto my-36">
            <div className="text-2xl md:text-5xl text-green-700">About.</div>
            <div className="pt-8 max-w-3xl">
              Hiya! I am Joni. I am a person who enjoys learning and exploring.
              My hobbies include geocaching, hiking in nature, solving
              mysteries, and playing video games. On this website, I showcase my
              coding projects.
            </div>
            <div className="pt-8 max-w-3xl">
              I am looking for a new job opportunity and am open to exploring
              different work possibilities. You are welcome to suggest projects
              to me that I could implement as part of my portfolio. You can also
              suggest new technologies, programming languages, frameworks, etc.,
              that I haven't used before. If I am not already familiar with
              them, I am willing to learn.
            </div>
            <div className="flex text-xl md:text-3xl mt-12">
              <TitleRotator />
            </div>
            <div className="text-3xl mt-10 text-orange-400">Technologies</div>
            <div className="my-10 flex flex-wrap content-center gap-7 max-w-5xl">
              {logos.map((logo, index) => (
                <LogoItem
                  key={index}
                  path={logo.page}
                  image={logo.url}
                  text={logo.name}
                  {...(logo.styles && { extraStyles: logo.styles })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
