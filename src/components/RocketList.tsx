import { useQuery } from "@apollo/client";
import React from "react";
import { ROCKETS_LIST } from "../query/rocket";

type RocketItem = {
  id: string;
  name: string;
  type: string;
  description: string;
  country: string;
  company: string;
};

type RocketListData = {
  rockets: RocketItem[];
};

function RocketList() {
  const { loading, error, data } = useQuery<RocketListData>(ROCKETS_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops!</p>;

  console.log(data);

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-5xl font-regular tracking-wide text-sky-500/100 font-Prompt stretch-text">
            เที่ยวไหนดี
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {data?.rockets.map((item) => {
              return (
                <div key={item.id} className="group relative p-4">
                  <div className="relative w-full h-80 bg-blue-300 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={`https://picsum.photos/id/${Math.floor(
                        Math.random() * 200
                      )}/200/300`}
                      className="w-full"
                      alt={item.name}
                    />
                  </div>
                  <h2 className="mt-6 text-xl text-gray-500">{item.name}</h2>

                  <h3 className="mt-2 ">{item.company}</h3>
                  <p className="text-gray-500">{item.description}</p>
                  <p>Type: {item.type}</p>
                  <p>Country: {item.country}</p>
                  <p>Company: {item.company}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RocketList;
