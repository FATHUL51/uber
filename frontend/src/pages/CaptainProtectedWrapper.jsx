import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserCaptainWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/CaptainLogin");
      return; // Ensure to stop further execution if there's no token.
    }

    // Make the API call only when there's a valid token
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCaptain(res.data.captain);
        }
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/CaptainLogin");
        } else {
          console.error("Error fetching captain profile:", err);
        }
      })
      .finally(() => {
        setIsLoading(false); // Stop loading state whether success or error.
      });
  }, [token, navigate, setCaptain]); // Ensure effect runs when token changes.

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
};

export default UserCaptainWrapper;
