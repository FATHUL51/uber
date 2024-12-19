import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import CaptainContext from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    };
    const responce = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}captains/register`,
      captainData
    );
    if (responce.status === 201) {
      const data = responce.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/Captain/Home");
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setColor("");
    setPlate("");
    setCapacity("");
    setVehicleType("");
  };
  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10 "
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC83N1wvMTg4MTBcLzhlMzg4YTlmZmQxYmI2NDllNzZjZTIwNmQ0ZWQzYWRhLTE2MjQzODUwOTguc3ZnIn0:postmates:Z2mhuRWJ0AifGRR42OWShWubmsPHXiZRVSPVDUm3kQE?width=2400"
          alt="Uber"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">Enter your Name</h3>
          <div className="flex flex-row gap-3 mb-6">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border  text-base placeholder:text-base"
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2  border w-1/2 text-base placeholder:text-base"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-base font-medium mb-2"> Enter your Email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2  border w-full text-base placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email@example.com"
          />
          <h3 className="text-base font-medium mb-2"> Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  border w-full text-base placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="password"
          />
          <h3 className="text-base font-medium mb-2"> Vehicle Details</h3>
          <div className="flex flex-row gap-3 mb-6">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border  text-base placeholder:text-base"
              required
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              type="text"
              placeholder="Color"
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2  border w-1/2 text-base placeholder:text-base"
              value={plate}
              onChange={(e) => {
                setPlate(e.target.value);
              }}
              type="text"
              placeholder="Plate"
            />
            <input
              type="number"
              className="bg-[#eeeeee]  rounded px-4 py-2  border w-1/2 text-base placeholder:text-base"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
              placeholder="Capacity"
            />
            <select
              name="vehicleType"
              id=""
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee]  rounded px-4 py-2  border w-1/2 text-base placeholder:text-base"
            >
              <option value="">Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <button className="bg-[#050505] text-white font-semibold mb-6 rounded px-4 py-2  w-full ">
            Create
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/CaptainLogin" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
