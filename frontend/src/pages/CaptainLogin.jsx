import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import CaptainContext from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const login = {
      email,
      password,
    };
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}captains/login`,
      login
    );
    if (res.status === 200) {
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/Captain/Home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC83N1wvMTg4MTBcLzhlMzg4YTlmZmQxYmI2NDllNzZjZTIwNmQ0ZWQzYWRhLTE2MjQzODUwOTguc3ZnIn0:postmates:Z2mhuRWJ0AifGRR42OWShWubmsPHXiZRVSPVDUm3kQE?width=2400"
          alt="Uber"
        />
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
            Wana work for us?
            <Link to="/CaptainSignup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          className="bg-[#d5622d] text-white font-semibold mb-7 flex justify-center items-center rounded px-4 py-2 text-lg  w-full "
          to="/Login"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
