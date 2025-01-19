import React from "react";
import { Link } from "react-router-dom";
import map from "../assets/Screenshot 2025-01-16 at 8.10.54 PM.png";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="fixed h-10 w-10 bg-white flex items-center justify-center right-2 top-2  rounded-full"
      >
        <i className=" text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={map} alt="" />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="w-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
            alt=""
          />
          <div className=" text-right">
            <h2 className="text-lg font-medium">skislam</h2>
            <h4 className="text-lg font-semibold -mt-1">UK04N8989</h4>
            <p className="text-sm text-gray-600 -mb-1">Maruti suzuki k10</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-3 ">
          <div className="w-full">
            <div className="flex items-center gap-5 border-b-2 border-gray-300 p-3">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm text-gray-600 -mt-1">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>

            <div className="flex items-center p-3 gap-5 my-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">rs 193.20</h3>
                <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
          make a payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
