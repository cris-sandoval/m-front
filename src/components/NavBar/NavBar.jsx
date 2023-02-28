import React from 'react'
import "./navbar.css"
import logo1 from "../../image/Logo1.png";
import menu from "../../image/Menu.png";
import { useState } from 'react';
import NavMenu from '../NavMenu/NavMenu';

export default function NavBar() {

  const [render, setRender] = useState(false);

  function handleRender(){
    setRender(!render) 
  }

  return (
    <div className="img-container-nav">
            <img onClick={handleRender} className="menu-h" src={menu} alt="menu" />
            <img className="logo1" src={logo1} alt="logo1" />
            {render ? <NavMenu handleRender={handleRender}/> : "" }
          </div>
  )
}

