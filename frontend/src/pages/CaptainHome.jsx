import React from "react";
import { Link } from "react-router-dom";
import map from "../assets/Screenshot 2025-01-16 at 8.10.54 PM.png";
import image from "../assets/Uber_logo_2018.png";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed top-0 items-center justify-between flex w-screen p-2">
        <img className="w-16  " src={image} alt="" />
        <Link
          to={"/home"}
          className=" h-10 w-10 bg-white flex items-center justify-center   rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={map} alt="" />
      </div>
      <div className="h-1/2 p-4">
        <div>
          <img src="" alt="" />
          <h4>Ashique</h4>
          <div>
            <h4>rs 295.2</h4>
            <p>Earned</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <i className="text-2xl font-extralight ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-small text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-2xl font-extralight  ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-small text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-2xl font-extralight  ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-small text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
