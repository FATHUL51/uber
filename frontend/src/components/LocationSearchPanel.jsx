import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B,Near Kapoor's cafe, Sheryians Coding School,Bhopal",
    "24B,Near Kapoor's cafe, Sheryians Coding School,Bhopal",
    "24B,Near Kapoor's cafe, Sheryians Coding School,Bhopal",
    "24B,Near Kapoor's cafe, Sheryians Coding School,Bhopal",
  ];
  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanle(true);
              props.setPannelOpen(false);
            }}
            className="flex items-center justify-start gap-3 border-2 border-white p-3 active:border-black rounded-xl"
          >
            <h2 className="bg-[#eee] px-2 py-1 rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
