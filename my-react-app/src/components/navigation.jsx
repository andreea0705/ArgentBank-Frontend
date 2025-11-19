import React from "react";
import "../style/navigation.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSignOut } from "../features/authSlice";
import User from "../img/svg/user.svg";

const Navigation = () => {
  const token = useSelector((state) => state.auth.token);
  const dataUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  // const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.clear();
    dispatch(setSignOut({ token }));
  };

  return (
    <section className="navigation">
      {token && (
        <Link className="main-nav-item" to="/profile">
          <img src={User} alt="Mon SVG" />
          {dataUser.userName}
        </Link>
      )}
      <Link
        className="main-nav-item"
        to={token ? "/" : "/login"}
        onClick={handleLogout}
      >
        {token ? "Sign Out" : "Sign In"}
      </Link>
    </section>
  );
};

export default Navigation;
