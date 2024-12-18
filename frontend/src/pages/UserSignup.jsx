import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Uber_logo_2018.png";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [data, setData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setData({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    });
    console.log(data);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10 " src={logo} alt="Uber" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What's your Name</h3>
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

          <h3 className="text-base font-medium mb-2"> What's your Email</h3>
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
          <button className="bg-[#050505] text-white font-semibold mb-6 rounded px-4 py-2  w-full ">
            Create
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/Login" className="text-blue-600">
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

export default UserSignup;
