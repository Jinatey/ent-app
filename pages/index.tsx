import React from "react";
import { data } from "@/data";

export default function home() {
  return (
    <div className=" bg to-blue-950 text-blue-200">
      <div className="p-3">
        <div className="p-2">lorem 20``
        <p>dkfkd</p>
        <p>trednding</p>
        </div>

        <div className="p-2 flex gap-1">
          {data.map((item)=>(
            <div><img src={item.thumbnail.trending?.large} alt="" />

            </div>
          ))}        

          {/* <img src={data[0].thumbnail.trending?.small} alt="" /> */}
        </div>

        <div>
          <p>Recomended for you </p>
          <div className="grid gap-4 grid-cols-4 ">
            {data.map((dataItem) => (
              <div>
                <img className="rounded-md"  src={dataItem.thumbnail.regular?.small} alt="" />
                <div className="flex gap-4">
                  <p>{dataItem.year} .</p>  
                  <p>{dataItem.category} .</p>  
                  <p>{dataItem.rating}</p>  
                </div>
                <p>{dataItem.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
