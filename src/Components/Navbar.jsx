import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

const Navbar = ({ isDarkMode, isLoggedIn, setIsLoggedIn }) => {
  const logOutHandler = () => {
    axios
      .post("https://positive-place-be.herokuapp.com/auth/logout")
      .then(() => {
        setIsLoggedIn(false);
      });
  };

  return (
    <div
      className={`navbar-parent nav-hidden
      ${isDarkMode ? "nav-dark" : "nav-light"}
      `}
    >
      <div className="nav-top-butts">
        <Link className="nav-logo" to="/">
          <img
            src={`${
              isDarkMode ? "imgs/logo-negative.png" : "imgs/logo-positive.png"
            }`}
            alt="blub"
          />
        </Link>

        <Link
          to="/signup"
          className={`signin-butt ${isLoggedIn ? "hidden" : ""} ${
            isDarkMode ? "dark-bg" : ""
          }`}
        >
          <button onClick={logOutHandler}>Sign Up</button>
        </Link>

        <Link
          to="/"
          className={`signout-butt grey ${isLoggedIn ? "" : "hidden"}`}
        >
          <button>Write a post</button>
        </Link>
        <Link
          to="/history-page"
          className={`signout-butt ${isLoggedIn ? "" : "hidden"}`}
        >
          <button>My Entries</button>
        </Link>
        <Link
          to="/remember-why"
          className={`signout-butt ${isLoggedIn ? "" : "hidden"}`}
        >
          <button>Homer Simpson</button>
        </Link>
      </div>
      <Link to="/" className={`signout-butt ${isLoggedIn ? "" : "hidden"}`}>
        <button
          style={`{isDarkMode && "background-color: #fff"`}
          onClick={logOutHandler}
        >
          Log out
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
