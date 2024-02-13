import React from "react";
import { data } from "@/data";

export default function Home() {
  return (
    <div className=" ml-10 bg to-blue-950 text-blue-200">
      <div className="p-3">
        <div className="p-2">
          lorem 20``
          <p>dkfkd</p>
        </div>
        <h1 className=" text-xl font-bold ">Trending</h1>
        <div className="p-2 gap-7 max-w-[1200px]  grid  grid-cols-[repeat(5,250px)]  overflow-x-scroll">
          {data.map((item) => {
            let img = "";
            if (item.isTrending) {
              img = item.thumbnail.trending.large;
            }
            return (
              <div >
                <img  src={img} alt="" />
              </div>
            );
          })}

          {/* <img src={data[0].thumbnail.trending?.small} alt="" /> */}
        </div>

        <div className="">
          <p className=" font-bold  text-xl py-4">Recomended for you </p>
          <div className="grid gap-9 grid-cols-4 ">
            {data.map((dataItem) => (
              <div className=" margin-auto">
                <div className="  absolute w-[300px] h-[150px] z-10 grid justify-center transition-all 	hover:bg-blue-800 tra items-center">
                  <img
                    className=""
                    src="assets/icon-bookmark-empty.svg"
                    alt=""
                  />
                </div>
                <img
                  className="rounded-md  "
                  src={dataItem.thumbnail.regular?.small}
                  alt=""
                />
                <div className="flex gap-4">
                  <p className="">{dataItem.year} .</p>
                  <p>{dataItem.category} .</p>
                  <p>{dataItem.rating}</p>
                </div>
                <p className=" text-white text-lg font-bold  pb-5">
                  {dataItem.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
