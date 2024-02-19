import React from "react";
import { data } from "@/data";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const filterBySearch = data?.filter((c) =>
    c.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className=" ml-10 bg to-blue-950 text-blue-200">
      <div className="p-3">
        <div className="p-2">
          <label className="flex items-center" htmlFor="">
            <CiSearch size={35} className="" />

            <input
              className=" caret-red-500  outline-none w-full bg-slate-700  border-b  py-4"
              placeholder="Search for movie or Tv series"
              type="text"
              name=""
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <h1 className=" text-xl font-bold ">Trending</h1>

        <div className="p-2 gap-7  gridauto  max-w-[750px]  ">
          {data.map((item) => {
            if (item.isTrending) {
              const img = item.thumbnail.trending.large;
              return (
                <div className="item">
                  <img src={img} alt="" />
                </div>
              );
            }
          })}
        </div>

        <div className="">
          <p className=" font-bold  text-xl py-4">Recomended for you </p>
          <div className="gridrec">
            {filterBySearch.map((dataItem) => (
              <div className="relative margin-auto h-[200px]">
                <div className="absolute w-[100%]  h-[100%] z-10 grid justify-center transition-all 	hover:bg-blue-800 items-center">
                  <img
                    className=""
                    src="assets/icon-bookmark-empty.svg"
                    alt=""
                  />
                </div>

                {/*  */}
                {/*  */}
                {/*  */}

                <img
                  className="rounded-md  block w-[100%]"
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
