import React from "react";
import "../style/navigation.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSignOut } from "../features/authSlice";
import UserIcon from "./UserIcon"; 
import SignOutIcon from "../img/signout.webp";

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
      {/* Image toujours visible */}
      <UserIcon />

      {/* Lien conditionnel */}
      {token && (
        <Link className="main-nav-item" to="/profile">
          {dataUser.userName}
        </Link>
      )}

      <Link
        className="main-nav-item"
        to={token ? "/" : "/login"}
        onClick={token ? handleLogout : undefined}
      >
         {token ? (
          <>
            <img src={SignOutIcon} alt="Sign Out Icon" className="logout-icon" /> 
            Sign Out
          </>
        ) : (
          "Sign In"
        )}
      </Link>
    </section>
  );
};

export default Navigation;
