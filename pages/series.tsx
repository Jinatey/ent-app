import React from "react";
import { data } from "@/data";
import { useSnapshot } from "valtio";
import { state } from "@/store/store";

export default function home() {
  return (
    <div className="ml-10 bg to-blue-950 text-blue-200">
      <div className="p-3">
        <div className="p-2">
          lorem 20``
          <p>dkfkd</p>
          <p>Tv series</p>
        </div>

        <div>
          <p>Recomended for you </p>
          <div className="grid gap-4 grid-cols-4 ">
            {data.map((dataItem) => {
              if (dataItem.category != "TV Series") {
                return null;
              }

              return (
                <div>
                  <img
                    className="rounded-md"
                    src={dataItem.thumbnail.regular?.small}
                    alt=""
                  />
                  <div className="flex gap-4">
                    <p>{dataItem.year} .</p>
                    <p>{dataItem.category} .</p>
                    <p>{dataItem.rating}</p>
                  </div>
                  <p>{dataItem.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
