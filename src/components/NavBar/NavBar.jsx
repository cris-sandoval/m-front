import React from 'react'
import "./navbar.css"
import logo1 from "../../image/Logo1.png";
import menu from "../../image/Menu.png";

export default function NavBar() {
  return (
    <div className="img-container-nav">
            <img className="menu-h" src={menu} alt="menu" />
            <img className="logo1" src={logo1} alt="logo1" />
          </div>
  )
}

