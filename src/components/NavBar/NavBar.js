import React from "react";
import "./style.css";
import { findTextColorByContrast } from "../../utility/color-finder";

export default function NavBar(props) {
  // Nav color will chne based on input

  // Nav font coluor will also change based on background color contrast

  const { color } = props;

  const textColor = findTextColorByContrast(color);

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: color, color: textColor }}
    >
      <h3>Color Finder</h3>
    </nav>
  );
}
