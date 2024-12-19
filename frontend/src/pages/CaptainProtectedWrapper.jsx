import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserCaptainWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [Isloading, setIsloading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/CaptainLogin");
    }
  }, [token]);
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        setCaptain(res.data.captain);
        setIsloading(false);
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/CaptainLogin");
      }
    });
  if (Isloading) {
    return <h1>Loading...</h1>;
  }
  return <>{children}</>;
};

export default UserCaptainWrapper;
