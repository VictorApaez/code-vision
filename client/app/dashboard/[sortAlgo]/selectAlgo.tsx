import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export function SelectAlgo({}) {
  return (
    <div className="mx-4">
      <div className="flex items-center ">
        <p className="text-lg">Bubble Sort</p>
        <IoMdArrowDropdown className="text-4xl" />
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
