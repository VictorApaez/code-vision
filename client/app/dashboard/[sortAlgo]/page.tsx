"use client";
import { SelectAlgo } from "./selectAlgo";
import { algoData } from "../../api/data.js";
import SortingVisualizer from "./(Visualizer)/SortingVisualizer";
import CodeBlock from "./CodeBlock";
import Complexity from "./Complexity";
import Description from "./Description";

interface DashboardParams {
  params: { sortAlgo: "quicksort" | "bubblesort" };
}

interface sortingAlgo {
  code: string;
  description: string;
}

export default function Dashboard({ params }: DashboardParams) {
  const selectedAlgo: sortingAlgo = algoData.sort[params.sortAlgo];

  return (
    <div className="flex flex-col w-fit p-4 bg-gray-200">
      <div>
        <SelectAlgo />
      </div>
      <div className="flex justify-evenly flex-col md:flex-row md:h-2/6 ">
        <div className="bg-gray-100 rounded-md shadow-[5px_5px_20px_rgb(0,0,0,0.4)] max-h-sm m-4 md:w-full overflow-x-hidden p-4">
          <Description desc={selectedAlgo.description} />
        </div>
        <div className="bg-gray-100 rounded-xl shadow-[5px_5px_20px_rgb(0,0,0,0.4)] max-h-sm m-4 overflow-y-auto p-4 md:w-full">
          <CodeBlock code={selectedAlgo.code} />
        </div>
        <div className="bg-gray-100 rounded-md shadow-[5px_5px_20px_rgb(0,0,0,0.4)] m-4 md:w-full overflow-y-auto flex flex-col p-4">
          <Complexity />
        </div>
      </div>

      <div className="flex flex-col bg-gray-100 rounded-md shadow-[5px_5px_20px_rgb(0,0,0,0.4)] h-[400px] m-4 p-4 md:flex-1">
        <SortingVisualizer />
      </div>
    </div>
  );
}
