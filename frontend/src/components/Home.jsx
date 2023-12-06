import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import angularLogo from "../assets/angular.png";
import nodejsLogo from "../assets/nodejs.png";
import LogoItem from "./UI/LogoItem";
import reactLogo from "../assets/react.png";
import typeScriptLogo from "../assets/ts-logo-256.png";
import javaScriptLogo from "../assets/js-logo.png";
import vueLogo from "../assets/vue-logo.png";
import mongoDbLogo from "../assets/mongoDB_SpringGreen.png";
import csharpLogo from "../assets/csharp_Logo.png";
import springBootLogo from "../assets/spring-boot.png";
import aspnetLogo from "../assets/net-core.png";
import mySqlLogo from "../assets/logo-mysql-170x115.png";
import gitLogo from "../assets/git-Icon.png";
import tailwindLogo from "../assets/tailwind.png";
import sassLogo from "../assets/sass-1-logo.png";
import digitalOceanLogo from "../assets/digitalOcean-logo.png";
import awsLogo from "../assets/aws-logo.png";

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

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-24">
          <SideBar />
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
                path="https://angular.io/"
                image={angularLogo}
                text="Angular"
              />
              <LogoItem
                path="https://nodejs.org/en"
                image={nodejsLogo}
                text="NodeJS"
                extraStyles="pt-6"
              />
              <LogoItem
                path="https://react.dev/"
                image={reactLogo}
                text="React"
              />
              <LogoItem
                path="https://www.typescriptlang.org/"
                image={typeScriptLogo}
                text="TypeScript"
              />
              <LogoItem
                path="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                image={javaScriptLogo}
                text="JavaScript"
              />
              <LogoItem path="https://vuejs.org/" image={vueLogo} text="Vue" />
              <LogoItem
                path="https://www.mongodb.com/"
                image={mongoDbLogo}
                text="MongoDB"
                extraStyles="pt-6 w-36"
              />
              <LogoItem
                path="https://learn.microsoft.com/en-us/dotnet/csharp/"
                image={csharpLogo}
                text="C Sharp"
              />
              <LogoItem
                path="https://spring.io/"
                image={springBootLogo}
                text="Spring Boot"
              />
              <LogoItem
                path="https://dotnet.microsoft.com/en-us/apps/aspnet"
                image={aspnetLogo}
                text="ASP.NET"
                extraStyles="pt-3"
              />
              <LogoItem
                path="https://www.mysql.com/"
                image={mySqlLogo}
                text="mySQL"
                extraStyles="pt-4"
              />
              <LogoItem
                path="https://git-scm.com/"
                image={gitLogo}
                text="Git"
              />
              <LogoItem
                path="https://tailwindcss.com/"
                image={tailwindLogo}
                text="Tailwind"
                extraStyles="pt-6"
              />
              <LogoItem
                path="https://sass-lang.com/"
                image={sassLogo}
                text="Sass"
                extraStyles="pt-4"
              />
              <LogoItem
                path="https://www.digitalocean.com/"
                image={digitalOceanLogo}
                text="DigitalOcean"
              />
              <LogoItem
                path="https://aws.amazon.com/"
                image={awsLogo}
                text="AWS"
                extraStyles="pt-4 w-36"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
