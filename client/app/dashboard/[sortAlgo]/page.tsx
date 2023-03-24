"use client";
import allData from "../../api/data.json";
import SortingVisualizer from "./(bar-graph)/SortingVisualizer";
import CodeBlock from "./CodeBlock";
import Complexity from "./Complexity";
import Description from "./Description";

interface DashboardParams {
  params: { sortAlgo: string };
}

interface sortingAlgo {
  description: string;
}

export default function Dashboard({ params }: DashboardParams) {
  const selectedAlgo: sortingAlgo = allData.sort[params.sortAlgo];

  return (
    <div className="flex flex-col w-full">
      <div className="h-10 m-4">{params.sortAlgo}</div>
      <div className="flex justify-evenly h-2/6 flex-col md:flex-row">
        <div className="bg-gray-100 p-4 rounded-md shadow-xl max-h-sm m-4 md:w-full overflow-y-auto">
          <Description desc={selectedAlgo.description} />
        </div>
        <div className="bg-gray-100 rounded-md shadow-xl max-h-sm m-4 md:w-full overflow-y-auto">
          <CodeBlock />
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-xl max-h-sm m-4 md:w-full overflow-y-auto flex flex-col ">
          <Complexity />
        </div>
      </div>

      <div className="flex flex-col bg-gray-100 p-4 rounded-md shadow-xl  h-4/6 m-4 ">
        <SortingVisualizer />
      </div>
    </div>
  );
}
