import React from "react";
import { NavLink } from "react-router-dom";

const DynamicNavLink = ({ to, children }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? "red" : "white",
          fontWeight: isActive ? "bold" : "",
        };
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default DynamicNavLink;
