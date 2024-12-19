import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [Isloading, setIsloading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/Login");
    }
  }, [token]);
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        setUser(res.data.user);
        setIsloading(false);
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/Login");
      }
    });
  if (Isloading) {
    return <h1>Loading...</h1>;
  }
  return <>{children}</>;
};

export default UserProtectedWrapper;
