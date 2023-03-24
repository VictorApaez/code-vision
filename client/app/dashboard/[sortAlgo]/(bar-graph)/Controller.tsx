import React from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { ImShuffle } from "react-icons/im";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface ControllerProps {
  animateSorting: () => void;
  randomizeBars: () => void;
  disableBtn: boolean;
  addBar: () => void;
  removeBar: () => void;
}

export function Controller({
  animateSorting,
  randomizeBars,
  disableBtn,
  addBar,
  removeBar,
}: ControllerProps) {
  return (
    <div className="flex justify-between items-center box-border h-fit-content  mb-10">
      <div>
        <button
          onClick={animateSorting}
          className="rounded-full bg-green-500 p-3 m-2 text-white"
        >
          <FaPlay />
        </button>
        <button className="rounded-full bg-yellow-500 p-3 m-2 text-white">
          <FaPause />
        </button>
        <button className="rounded-full bg-red-500 p-3 m-2 text-white">
          <FaStop />
        </button>
      </div>
      <div>
        <input type="range" />
      </div>
      <div className="flex h-10">
        <button
          onClick={randomizeBars}
          className={`${
            disableBtn
              ? "cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300"
              : ""
          } hover:bg-blue-700 ease-in-out duration-300 bg-blue-500 bg-black-500 rounded-md p-3 ml-2 flex justify-center items-center text-white text-xl`}
          disabled={disableBtn}
        >
          <ImShuffle />
        </button>
        <button
          onClick={addBar}
          className={`${
            disableBtn
              ? "cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300"
              : ""
          } hover:bg-blue-700 ease-in-out duration-300 bg-blue-500 rounded-md p-3 ml-2 flex justify-center items-center text-white text-xl `}
          disabled={disableBtn}
        >
          <AiOutlinePlus />
        </button>
        <button
          onClick={removeBar}
          className={`${
            disableBtn
              ? "cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300"
              : ""
          } hover:bg-blue-700 ease-in-out duration-300 bg-blue-500 rounded-md p-3 ml-2 flex justify-center items-center text-white text-xl `}
          disabled={disableBtn}
        >
          <AiOutlineMinus />
        </button>
      </div>
    </div>
  );
}
