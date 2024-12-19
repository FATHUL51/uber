import React from "react";
import logo from "../assets/Uber_logo_2018.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-[url(https://images.pexels.com/photos/731259/pexels-photo-731259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-16 ml-8"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC8xNFwvMTg4MjBcL2EyMjZlZDFmM2UzMjViMDk2ZjBlZmU4NjViN2ZhZjc0LTE2MjQzODUwOTguc3ZnIn0:postmates:o58sMblbZ879OmNk3KV_OJ7t72AUlhLyLfbCrtrRvt8?width=2400"
          alt="Uber"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
