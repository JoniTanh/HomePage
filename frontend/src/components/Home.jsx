import React from "react";
import SideBar from "./SideBar";
import LogoItem from "./UI/LogoItem";
import storageService from "../services/storageServices";
import TitleRotator from "./TitleRotator";
import { useLoaderData } from "react-router";

export default function Home() {
  const logosData = useLoaderData();

  const linkedInLogo = logosData.find((logo) =>
    logo.name.toLowerCase().includes("linkedin")
  );
  const githubLogo = logosData.find((logo) =>
    logo.name.toLowerCase().includes("github")
  );

  const logos = logosData
    .filter((logo) => logo !== linkedInLogo && logo !== githubLogo)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block md:w-24">
          <SideBar githubLogo={githubLogo} linkedInLogo={linkedInLogo} />
        </div>
        <div className="flex-1 text-gray-500 sourceCodePro">
          <div className="px-8 xl:pl-[120px] md:px-[120px] mx-auto my-20 sm:my-24">
            <div className="text-2xl md:text-5xl text-green-700">About.</div>
            <div className="pt-8 w-full xl:max-w-3xl text-justify">
              Hiya! I am Joni. I am a person who enjoys learning and exploring.
              My hobbies include geocaching, hiking in nature, and playing video
              games. On this website, I showcase my coding projects.
            </div>
            <div className="pt-8 w-full xl:max-w-3xl text-justify">
              I am looking for a new job opportunity and am open to exploring
              different work possibilities. You are welcome to suggest projects
              to me that I could implement as part of my portfolio. You can also
              suggest new technologies, programming languages, frameworks, etc.,
              that I haven't used before. If I am not already familiar with
              them, I am willing to learn.
            </div>
            <div className="block md:hidden">
              <div className="flex my-10 flex-wrap content-center gap-5 max-w-5xl">
                <LogoItem
                  path={githubLogo.page}
                  image={githubLogo.url}
                  text={githubLogo.name}
                  className="w-12"
                />
                <LogoItem
                  path={linkedInLogo.page}
                  image={linkedInLogo.url}
                  text={linkedInLogo.name}
                  className="w-12 pt-1"
                />
              </div>
            </div>
            <div className="hidden md:block text-xl md:text-3xl mt-12">
              <TitleRotator />
            </div>
            <div className="text-3xl mt-10 text-orange-400">Technologies</div>
            <div className="my-10 flex flex-wrap content-center gap-7 max-w-5xl justify-center sm:justify-normal">
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

async function loadLogos() {
  const data = await storageService.getLogos();
  return data;
}

export function loader() {
  return loadLogos();
}
