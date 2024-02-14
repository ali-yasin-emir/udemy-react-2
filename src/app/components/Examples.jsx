"use client";

import { EXAMPLES } from "@/app/data";
import { useState } from "react";

const Examples = () => {
  const initialCode = (
    <span className="text-[#e7c7ff]">Please select the tab</span>
  );
  const [tabName, setTabName] = useState("");
  const [tabContent, setTabContent] = useState(initialCode);

  const handleClick = (tabName) => {
    const tabContentCode = (
      <div>
        <h3 className="text-lg text-gray-100 font-semibold">
          {EXAMPLES[tabName].title}
        </h3>
        <p className="text-lg text-[#dfb4ff]">
          {EXAMPLES[tabName].description}
        </p>
        <span
          className={`${
            tabName === "components" || tabName === "jsx" || tabName === "props"
              ? "text-lg"
              : ""
          } text-gray-200 whitespace-pre-wrap font-light`}
        >
          {EXAMPLES[tabName].code}
        </span>
      </div>
    );
    setTabName(tabName);
    setTabContent(tabContentCode);
  };
  return (
    <div className="w-[1240px]">
      <div className="flex flex-col">
        <h1 className="text-[#d0aeec] pb-4 text-2xl font-semibold">Examples</h1>
        <div className="flex flex-1 text-[18px] gap-2 font-semibold text-[#3e2453]">
          <h2
            onClick={(tabName) => handleClick("components")}
            className="bg-[#ba90db] hover:bg-[#3e2453] antialiased hover:text-[#ba90db] cursor-pointer px-6 rounded-t-lg"
          >
            Components
          </h2>
          <h2
            onClick={(tabName) => handleClick("jsx")}
            className="bg-[#ba90db] hover:bg-[#3e2453] antialiased hover:text-[#ba90db] cursor-pointer px-6 rounded-t-lg"
          >
            JSX
          </h2>
          <h2
            onClick={(tabName) => handleClick("props")}
            className="bg-[#ba90db] hover:bg-[#3e2453] antialiased hover:text-[#ba90db] cursor-pointer px-6 rounded-t-lg"
          >
            Props
          </h2>
          <h2
            onClick={(tabName) => handleClick("state")}
            className="bg-[#ba90db] hover:bg-[#3e2453] antialiased hover:text-[#ba90db] cursor-pointer px-6 rounded-t-lg"
          >
            State
          </h2>
        </div>
        <div className="w-[1240px] flex flex-col gap-4 rounded-b-lg rounded-tr-lg p-5 bg-[#7b549b] justify-center px-6">
          {tabContent}
        </div>
      </div>
    </div>
  );
};

export default Examples;
