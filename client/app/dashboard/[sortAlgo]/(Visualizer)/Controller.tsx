import React from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { ImShuffle } from "react-icons/im";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  addBar,
  removeBar,
  randomizeBars,
} from "@/app/utils/barGraph/controllers";

interface ControllerProps {
  items: Array<{ key: string; value: number }>;
  setItems: (items: Array<{ key: string; value: number }>) => void;
  animateSorting: () => void;
  disableBtn: boolean;
  length: number;
  setAnimationSpeed: (speed: number) => void;
}

export function Controller({
  items,
  setItems,
  animateSorting,
  disableBtn,
  length,
  setAnimationSpeed,
}: ControllerProps) {
  const handleAddBar = () => addBar({ items, setItems });
  const handleRemoveBar = () => removeBar({ items, setItems });
  const handleRandomizeBars = () => randomizeBars({ items, setItems });

  function handleRange(e: React.ChangeEvent<HTMLInputElement>) {
    let speed = parseInt(e.target.value);
    setAnimationSpeed(speed * 5);
  }

  return (
    <div className="flex justify-between items-center box-border h-fit-content  mb-10">
      <div>
        <button
          onClick={animateSorting}
          className={`${
            disableBtn ? "cursor-not-allowed bg-gray-300" : ""
          } rounded-md bg-green-500 p-3 m-2 text-white flex items-center justify-center`}
          disabled={disableBtn}
        >
          <FaPlay />
          <p className="ml-2 font-bold">Start</p>
        </button>
        {/* TO DO: Implement stop and pause button - need to do more research */}
        {/* <button className="rounded-full bg-yellow-500 p-3 m-2 text-white">
          <FaPause />
        </button>
        <button className="rounded-full bg-red-500 p-3 m-2 text-white">
          <FaStop />
        </button> */}
      </div>
      {/* <div>
        <input type="range" onChange={(e) => handleRange(e)} />
      </div> */}
      <div className="flex h-10">
        <div className="flex items-center justify-center bg-blue-500 w-10 font-bold text-xl rounded-md text-white">
          <p>{length}</p>
        </div>
        <button
          onClick={handleAddBar}
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
          onClick={handleRemoveBar}
          className={`${
            disableBtn
              ? "cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300"
              : ""
          } hover:bg-blue-700 ease-in-out duration-300 bg-blue-500 rounded-md p-3 ml-2 flex justify-center items-center text-white text-xl `}
          disabled={disableBtn}
        >
          <AiOutlineMinus />
        </button>
        <button
          onClick={handleRandomizeBars}
          className={`${
            disableBtn
              ? "cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300"
              : ""
          } hover:bg-blue-700 ease-in-out duration-300 bg-blue-500 bg-black-500 rounded-md p-3 ml-2 flex justify-center items-center text-white text-xl`}
          disabled={disableBtn}
        >
          <ImShuffle />
        </button>
      </div>
    </div>
  );
}
