import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import DynamicNavLink from "../DynamicNavLink";

const Header = () => {
  return (
    <nav>
      <div className="navbar_item">
        <DynamicNavLink to={""}>Home</DynamicNavLink>
        <DynamicNavLink to={"about"}>About</DynamicNavLink>
        <DynamicNavLink to={"contact"}>contact</DynamicNavLink>
        <DynamicNavLink to={"user"}>User</DynamicNavLink>
      </div>
    </nav>
  );
};

export default Header;
