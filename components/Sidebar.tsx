import React from 'react'

const sideData = [
    { img: "home.svg", path: "/" },
    { img: "tv-series.svg", path: "/series" },
    { img: "movies.svg", path: "/movies" },
  ];
  


export const Sidebar = () => {
  return (
    <div className=' grid justify-center min-h-[700px] bg-blue-900'>
  <img className='w- p-1 py-4]' src="logo.svg" alt="" />

    {sideData.map((data)=>(
<div className=' p-2'>
    <img className=' w-6' src={data.img} alt="" />
</div>
    ))}

    </div>
  )
}
