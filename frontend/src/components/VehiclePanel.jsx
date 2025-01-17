import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="absolute w-full text-center top-0 text-2xl "
        onClick={() => {
          props.setVehiclePanle(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className=" flex items-center justify-between  border-2 active:border-black rounded-xl px-3"
      >
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div className="w-1/2 py-2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable,Copmact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className=" flex items-center justify-between  border-2 active:border-black rounded-xl px-3 mt-3"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 py-2">
          <h4 className="font-medium text-base">
            Bike
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable,MotorBike rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$65.83</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className=" flex items-center justify-between  border-2 active:border-black rounded-xl px-3 mt-3"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div className="w-1/2 py-2">
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-3-fill"></i>2
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$118.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
