import { useState } from "react";
import { MovieItemType } from "@/data";
import { useSnapshot } from "valtio";
import { state } from "@/store/store";

type Props = {
  dataItem: MovieItemType;
};

export function MovieItem({ dataItem }: Props) {
  const snap = useSnapshot(state);

  // console.log(JSON.parse(JSON.stringify(snap.bookmarks)));

  return (
    <div className=" margin-auto  ">
      <div className="relative  parent">
        <div className="bkc cursor-pointer absolute w-[100%] h-[100%] grid justify-center transition-all z-20 hover:bg-black hover:bg-opacity-50 items-center"></div>

        <img
          className="bk absolute inset-0 z-10 m-auto"
          src="assets/icon-play.svg"
          alt=""
        />

        <div className=" flex justify-end cursor-pointer">
          <img
            onClick={() => {
              // if (snap.bookmarks[dataItem.title] === true) {
              //   state.bookmarks[dataItem.title] = false;
              // } else {
              //   state.bookmarks[dataItem.title] = true;
              // }

              state.bookmarks[dataItem.title] = !snap.bookmarks[dataItem.title];
            }}
            className="absolute p-4 z-30"
            src={
              snap.bookmarks[dataItem.title] === false
                ? "assets/icon-bookmark-empty.svg"
                : "assets/icon-bookmark-full.svg"
            }
            alt=""
          />
        </div>

        {/*  */}
        {/*  */}
        {/*  */}

        <img
          className="bg  w-[100%]"
          src={dataItem.thumbnail.regular.small}
          alt=""
        />
      </div>

      <div className=" max-md:text-xs flex gap-4">
        <p className="">{dataItem.year} .</p>
        <p>{dataItem.category} .</p>
        <p>{dataItem.rating}</p>
      </div>
      <p className=" max-md:font-medium max-md:text-sm text-white text-lg font-bold  pb-5">
        {dataItem.title}
      </p>
    </div>
  );
}
