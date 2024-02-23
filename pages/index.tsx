import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSnapshot } from "valtio";

import { data } from "@/data";
import { MovieItem } from "@/components/MovieItem";
import { state } from "@/store/store";

export default function Home() {
  const [text, setText] = useState("");
  const filterBySearch = data?.filter((c) =>
    c.title.toLowerCase().includes(text.toLowerCase())
  );

  useEffect(() => {
    filterBySearch.map((dataItem) => {
      state.bookmarks[dataItem.title] = false;
    });
  }, []);

  // console.log(JSON.parse(JSON.stringify(state.bookmarks)));

  return (
    <div className=" pl-10   max-md:max-w-[750px]   text-blue-50">
      <div className="p-3">
        <div className="p-2">
          <label className="flex gap-2 items-center" htmlFor="">
            <CiSearch size={35} className="" />

            <input
              className=" caret-red-500 text-lg   outline-none w-full bg-[#10141E]  border-b  py-4 mb-7m "
              placeholder="Search for movie or Tv series"
              type="text"
              name=""
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <h1 className=" max-md:font-normal text-xl font-bold ">Trending</h1>

        <div className="p-2 gap-7   gridauto    ">
          {data.map((item) => {
            if (item.isTrending) {
              const img = item?.thumbnail?.trending?.large;

              return (
                <div
                  key={item.title}
                  className="item max-md:w-[300px] max-sm:w-[200px] overflow-hidden"
                >
                  <img
                    className=" rounded-md hover:scale-105 transition-all  "
                    src={img}
                    alt=""
                  />
                </div>
              );
            }
          })}
        </div>

        <div className="">
          <p className=" max-md:font-normal font-bold   text-xl py-4">
            Recomended for you{" "}
          </p>
          <div className="gridrec max-md:gap-5 max-md:grid-cols-3 max-sm:grid-cols-2">
            {filterBySearch.map((dataItem) => {
              return <MovieItem key={dataItem.title} dataItem={dataItem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
