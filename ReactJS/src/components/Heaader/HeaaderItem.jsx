import React from "react";
import { NavLink } from "react-router-dom";

export const HeaaderItem = ({ link, text }) => {
  return (
    <li>
      <NavLink to={link}>
        <p className="item_text">{text}</p>
      </NavLink>
    </li>
  );
};
