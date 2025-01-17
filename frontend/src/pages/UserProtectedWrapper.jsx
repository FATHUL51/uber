import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true); // Capitalization fixed here

  useEffect(() => {
    // Check for token
    if (!token) {
      navigate("/Login");
      return; // Early return if token is not present
    }

    // Fetch user profile
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setIsLoading(false); // Stop loading when data is fetched
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/Login");
        } else {
          // Handle other errors (optional)
          console.error("Error fetching user data:", err);
        }
        setIsLoading(false); // Stop loading even in case of error
      });
  }, [token, navigate, setUser]); // Depend on token, navigate, and setUser

  if (isLoading) {
    return <h1>Loading...</h1>; // Display loading message while fetching data
  }

  return <>{children}</>; // Render children once data is ready
};

export default UserProtectedWrapper;
