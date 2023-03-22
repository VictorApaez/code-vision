"use client";
import allData from "../../api/data.json";
import CodeBlock from "./CodeBlock";
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
      <div className="flex justify-evenly h-3/6 flex-col md:flex-row">
        <div className="bg-gray-100 p-4 rounded-md shadow-xl max-h-sm m-4 md:w-full overflow-y-auto">
          <Description desc={selectedAlgo.description} />
        </div>
        <div className="bg-gray-100 rounded-md shadow-xl max-h-sm m-4 md:w-full overflow-y-auto">
          <CodeBlock />
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-xl max-h-sm m-4 md:w-full overflow-y-auto">
          Time &amp; space Complexity
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-md shadow-xl  h-3/6 m-4 ">
        Visualizer
      </div>
    </div>
  );
}
