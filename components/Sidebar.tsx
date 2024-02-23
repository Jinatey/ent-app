import { useRouter } from "next/router";
import React from "react";

const sideData = [
  { img: "home.svg", Simage: "assets/home.svg", path: "/" },
  {
    img: "tv-series.svg",
    Simage: "assets/icon-category-tv.svg",
    path: "/series",
  },
  {
    img: "movies.svg",
    Simage: "assets/icon-category-movie.svg",
    path: "/movies",
  },
  {
    img: "assets/icon-nav-bookmark.svg",
    Simage: "assets/icon-bookmark-full.svg",
    path: "/bookmark",
  },
];

export const Sidebar = () => {
  const router = useRouter();

  return (
    <div>
      <div className=" md:hidden bg-slate-800 p-4 items-center max-w-[550px] flex justify-between">
        <div>
          <img className="w- p-1 py-]" src="logo.svg" alt="" />
        </div>

        <div className="flex gap-5">
          {sideData.map((data,idx) => (
            <div key={idx} className=" ">
              <img
                onClick={() => {
                  router.push(data.path);
                }}
                className="w-8 h-8"
                src={
                  data.path === router.pathname
                    ? `${data.Simage}`
                    : `${data.img}`
                }
                alt=""
              />
            </div>
          ))}
        </div>
        <div>
          <img className="w-11" src="assets/image-avatar.png" alt="" />
        </div>
      </div>
      {""}
      {""}
      {""}
      <div className=" max-md:hidden rounded-md py-4 m-3 grid justify-center w-[90px] h-[600px]  fixed bg-slate-800">
        <div className=" flex  flex-col  justify-between">
          <div>
            <img className="w- p-1 py-]" src="logo.svg" alt="" />

            <div className="grid mt-20 gap-9">
              {sideData.map((data, idx) => (
                <div key={idx}  className="  flex  justify-center">
                  <img
                    onClick={() => {
                      router.push(data.path);
                    }}
                    className="w-6 h-6"
                    src={
                      data.path === router.pathname
                        ? `${data.Simage}`
                        : `${data.img}`
                    }
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" w-8 ">
            <img src="assets/image-avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
