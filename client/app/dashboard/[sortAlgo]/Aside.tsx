import React from "react";

export default function Aside() {
  return (
    <div className="p-5 bg-[#0A1532] shadow-[5px_5px_20px_rgb(0,0,0,0.4)] text-gray-100">
      <h1 className="text-3xl font-normal leading-normal mt-0 mb-2  mb-4">
        CodeVisualizer
      </h1>
      <ul className="flex flex-col justify-center items-center pt-3 cursor-pointer">
        <li>Sorting Algorithms</li>
      </ul>
    </div>
  );
}
