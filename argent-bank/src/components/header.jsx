import React from "react";
import "../style/header.css";
import Logo from "../img/argentBankLogo.webp";
import { Link } from "react-router-dom";
import Navigation from "./navigation";

const Header = ({ token, handleLogout }) => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Argent Bank Logo" />
      </Link>
      <Navigation token={token} handleLogout={handleLogout} />
    </header>
  );
};

export default Header;
