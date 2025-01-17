import React from "react";

const WaitForDriver = (props) => {
  return (
    <div>
      <h5
        className="absolute w-full text-center top-0  text-2xl "
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
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
          <div className="flex items-center gap-5 my-3 border-b-2 border-gray-300 p-3">
            <i className="text-lg ri-map-pin-user-fill"></i>
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
    </div>
  );
};

export default WaitForDriver;
