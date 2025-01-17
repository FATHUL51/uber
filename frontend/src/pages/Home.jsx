import React, { useState, useRef } from "react";
import uber from "../assets/Uber_logo_2018.png";
import image from "../assets/Screenshot 2025-01-16 at 8.10.54 PM.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitForDriver from "../components/WaitForDriver";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const pannelRef = useRef(null);
  const pannleCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePanel, setVehiclePanle] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);

  const [pannelOpen, setPannelOpen] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (pannelOpen) {
        gsap.to(pannelRef.current, {
          height: "75%",
          opacity: 1,
          padding: "0 20px 0 20px",
        });
        gsap.to(pannleCloseRef.current, {
          opacity: "100%",
        });
      } else {
        gsap.to(pannelRef.current, {
          height: "0%",
          opacity: 0,
          padding: "0",
        });
        gsap.to(pannleCloseRef.current, {
          opacity: "0%",
        });
      }
    },
    [pannelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src={uber} alt="" />
      <div className="w-screen h-screen">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-end  absolute top-0 w-full h-screen">
        <div className="bg-white p-5 h-[25%] relative">
          <h5
            ref={pannleCloseRef}
            className="absolute top-6 text-2xl right-3"
            onClick={() => {
              setPannelOpen(false);
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            action=""
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-[3px] top-[5.5rem] rounded-md left-8  bg-black"></div>
            <input
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPannelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mb-3 mt-5"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPannelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>
        <div ref={pannelRef} className=" bg-[#fff] ">
          <LocationSearchPanel
            setPannelOpen={setPannelOpen}
            setVehiclePanle={setVehiclePanle}
          />
        </div>
        <div
          ref={vehiclePanelRef}
          className="fixed z-10  flex flex-col gap-3 bottom-0 bg-white p-5 translate-y-full  w-full"
        >
          <VehiclePanel
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanle={setVehiclePanle}
          />
        </div>
        <div
          ref={confirmRidePanelRef}
          className="fixed z-10  flex flex-col gap-3 bottom-0 bg-white p-5 translate-y-full  w-full"
        >
          <ConfirmRide
            setConfirmRidePanel={setConfirmRidePanel}
            setVehicleFound={setVehicleFound}
          />
        </div>
        <div
          ref={waitingForDriverRef}
          className="fixed z-10  flex flex-col gap-3 bottom-0 bg-white p-5   w-full"
        >
          <WaitForDriver waitingForDriver={waitingForDriver} />
        </div>
        <div
          ref={vehicleFoundRef}
          className="fixed z-10  flex flex-col gap-3 bottom-0 bg-white p-5 translate-y-full  w-full"
        >
          <LookingForDriver setVehicleFound={setVehicleFound} />
        </div>
      </div>
    </div>
  );
};

export default Home;
