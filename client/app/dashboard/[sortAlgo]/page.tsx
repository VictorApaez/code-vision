import data from "../../api/data.json";
console.log(data);

interface DashboardParams {
  params: { sortAlgo: string };
}

export default async function Dashboard({ params }: DashboardParams) {
  return (
    <div className="flex flex-col w-full">
      <div className="h-10 m-4">{params.sortAlgo}</div>
      <div className="flex justify-evenly h-3/6 flex-col md:flex-row">
        <div className="bg-gray-100 p-4 rounded-md shadow-xl max-h-sm m-4 md:w-full">
          Description
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-xl max-h-sm m-4 md:w-full">
          Algorithm code
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-xl max-h-sm m-4 md:w-full">
          Time &amp; space Complexity
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-md shadow-xl  h-3/6 m-4 ">
        Visualizer
      </div>
    </div>
  );
}
