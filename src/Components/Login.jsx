import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsLoggedIn, isDarkMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* ------------------------------- Throw Toast ------------------------------ */
  const notify = () => {
    toast();
    toast.error("Warning! Nobody loves you! 😬", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  /* ------------------------------ Login Handler ----------------------------- */

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", { username: username, password: password })
      .then((results) => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        notify();
      });
  };

  /* -------------------------------------------------------------------------- */

  return (
    <div className={`login-parent ${isDarkMode ? "text-white" : ""} `}>
      <form className="login-form" onSubmit={loginHandler}>
        <p className="welcome">Welcome Back</p>

        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button className="login-butt" type="submit">
          Log In
        </button>
      </form>

      <div className="login-redirect">
        <p>Don't have an account yet? </p>
        <Link to="/signup">
          <p>
            <strong>Signup</strong>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
