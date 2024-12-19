import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handlesubmit = async () => {
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem("token");
          navigate("/Login");
        }
      });
  };
  return (
    <div>
      <button
        className="bg-[#050505] text-white font-semibold mb-3 rounded px-4 py-2  w-full "
        onClick={() => handlesubmit()}
      >
        Logout
      </button>
    </div>
  );
};

export default CaptainLogout;
