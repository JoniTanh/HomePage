import React, { useState, useEffect } from "react";

const titles = [
  { text: "SOFTWARE DEVELOPER", color: "text-blue-500" },
  { text: "LEARNER", color: "text-orange-500" },
  { text: "GEOCACHER", color: "text-yellow-500" },
  { text: "FOREST ENGINEER", color: "text-green-500" },
];

export default function TitleRotator() {
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
    <div
      className={`transition-all transform duration-1000 ease-in-out ${color} text-shadow`}
    >
      {` ${title}`}
      <span className="text-gray-500">.</span>
    </div>
  );
}
