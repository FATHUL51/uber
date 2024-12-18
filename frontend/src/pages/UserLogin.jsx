import React, { useState } from "react";
import logo from "../assets/Uber_logo_2018.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setData({
      email,
      password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src={logo} alt="Uber" />
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2"> What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email@example.com"
          />
          <h3 className="text-lg font-medium mb-2"> Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="bg-[#050505] text-white font-semibold mb-3 rounded px-4 py-2  w-full ">
            Login
          </button>
          <p className="text-center">
            New here?
            <Link to="/Signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          className="bg-[#10b461] text-white font-semibold mb-7 flex justify-center items-center rounded px-4 py-2 text-lg  w-full "
          to="/CaptainLogin"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
