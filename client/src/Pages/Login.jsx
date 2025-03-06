import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import logo from "../assets/Sleepify_transparent.png";
import { registerAsync, loginAsync } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogIn] = useState(true);
  const [error, setError] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const credentials = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    try {
      const res = await dispatch(loginAsync(credentials));
      if (res.payload.message === "Successful login") {
        navigate("/");
      } else {
        setError(!error);
      }
    } catch (err) {
      setError(!error);
      throw new Error(err);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const credentials = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    try {
      const res = await dispatch(registerAsync(credentials));
      if (res.payload.message === "Successful registration") {
        navigate("/");
      } else {
        setError(!error);
      }
    } catch (err) {
      setError(!error);
      throw new Error(err);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-800">
      <div className="w-full h-20 bg-gray-800 flex justify-center items-center sticky top-0 z-100">
        <Navbar />
      </div>
      <div className="flex items-center justify-center">
        {login ? (
          <div className="bg-gray-900 border-[4px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200">
            <form
              className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col"
              onSubmit={handleLogIn}
            >
              <img src={logo} className="w-[150px] h-[150px]" />
              <h1 className="text-white text-2xl">Sign in to Sleepify</h1>
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Email"
                type="email"
                name="email"
              />
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
              />
              <input
                className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
                type="submit"
              />
              {error && (
                <span className="text-red-600">
                  Please Enter Valid Credentials!
                </span>
              )}
              <p>
                Don't have an account?
                <a
                  className="font-semibold text-white hover:text-blue-500 transition-all duration-200"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setLogIn(!login);
                  }}
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-gray-900 border-[4px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200">
            <form
              className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col"
              onSubmit={handleRegister}
            >
              <img src={logo} className="w-[150px] h-[150px]" />
              <h1 className="text-white text-2xl">Register to Sleepify</h1>
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Name"
                type="text"
                name="names"
              />
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Email"
                type="email"
                name="email"
              />
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
              />
              <input
                className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
                type="submit"
              />
              {error && (
                <span className="text-red-600">
                  Enter Valid Information Please!
                </span>
              )}
              <p>
                Already Have an Account?
                <a
                  className="font-semibold text-white hover:text-blue-500 transition-all duration-200"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setLogIn(!login);
                  }}
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
