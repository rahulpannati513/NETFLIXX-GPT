import React from "react";

const VideoTitle = ({ title, overview }) => {
  console.log(title, overview);
  return (
    <div className="w-screen aspect-video pt-[24%] px-20  absolute bg-gradient-to-r from-black ">
      <h1 className="text-4xl text-white  font-semibold  ">{title}</h1>
      <p className="py-6 text-white  text-xl font-serif w-1/4 ">{overview}</p>
      <div className="">
        <button className="bg-white mx-2 text-black p-4 px-12 text-xl hover:bg-opacity-70   rounded-lg ">
          ▶️ Play
        </button>
        <button className="bg-gray-300 mx-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
