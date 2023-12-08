import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import LogoItem from "./UI/LogoItem";
import storageService from "../services/storageServices";

const titles = [
  { text: "SOFTWARE DEVELOPER", color: "text-blue-500" },
  { text: "LEARNER", color: "text-orange-500" },
  { text: "GEOCACHER", color: "text-yellow-500" },
  { text: "FOREST ENGINEER", color: "text-green-500" },
];

export default function Home() {
  const [title, setTitle] = useState(titles[0].text);
  const [color, setColor] = useState(titles[0].color);
  const [index, setIndex] = useState(0);

  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % titles.length;
        setTitle(titles[nextIndex].text);
        setColor(titles[nextIndex].color);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const projectName = "logos";
        const logosData = await storageService.getImages(projectName);
        setLogos(logosData.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-24">
          <SideBar githubLogo={logos[6]} linkedInLogo={logos[8]} />
        </div>
        <div className="flex-1 text-gray-500 sourceCodePro">
          <div className="pl-[120px] pr-[30px] md:px-[120px] mx-auto my-36">
            <div className="text-2xl md:text-5xl">About.</div>
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
              <div
                className={`transition-all transform duration-1000 ease-in-out ${color} text-shadow`}
              >
                {` ${title}`}
                <span className="text-gray-500">.</span>
              </div>
            </div>
            <div className="text-3xl mt-10">Technologies.</div>
            <div className="my-10 flex flex-wrap content-center gap-7 max-w-5xl">
              <LogoItem
                path="https://dotnet.microsoft.com/en-us/apps/aspnet"
                image={logos[10]}
                text="ASP.NET"
                extraStyles="pt-2"
              />
              <LogoItem
                path="https://aws.amazon.com/"
                image={logos[2]}
                text="AWS"
                extraStyles="pt-4 w-20"
              />
              <LogoItem
                path="https://angular.io/"
                image={logos[1]}
                text="Angular"
              />
              <LogoItem
                path="https://learn.microsoft.com/en-us/dotnet/csharp/"
                image={logos[3]}
                text="C Sharp"
              />
              <LogoItem
                path="https://www.digitalocean.com/"
                image={logos[4]}
                text="DigitalOcean"
              />
              <LogoItem
                path="https://git-scm.com/"
                image={logos[5]}
                text="Git"
              />
              <LogoItem
                path="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                image={logos[7]}
                text="JavaScript"
              />
              <LogoItem
                path="https://www.mongodb.com/"
                image={logos[0]}
                text="MongoDB"
                extraStyles="pt-5 w-36"
              />
              <LogoItem
                path="https://www.mysql.com/"
                image={logos[9]}
                text="mySQL"
                extraStyles="pt-3.5"
              />
              <LogoItem
                path="https://nodejs.org/en"
                image={logos[11]}
                text="NodeJS"
                extraStyles="pt-6"
              />
              <LogoItem
                path="https://react.dev/"
                image={logos[12]}
                text="React"
              />
              <LogoItem
                path="https://sass-lang.com/"
                image={logos[13]}
                text="Sass"
                extraStyles="pt-2"
              />
              <LogoItem
                path="https://spring.io/"
                image={logos[14]}
                text="Spring Boot"
              />
              <LogoItem
                path="https://tailwindcss.com/"
                image={logos[15]}
                text="Tailwind"
                extraStyles="pt-3"
              />
              <LogoItem
                path="https://www.typescriptlang.org/"
                image={logos[16]}
                text="TypeScript"
              />
              <LogoItem
                path="https://vuejs.org/"
                image={logos[17]}
                text="Vue"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
