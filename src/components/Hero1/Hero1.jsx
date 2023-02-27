import React from 'react'
import "./hero1.css"
import NavBar from '../NavBar/NavBar'
import TextButton from '../TexButton/TextButton'
import HeroTextBar from '../HeroTextBar.jsx/HeroTextBar'

export default function Hero1() {
  return (
    <div className="container-main1">
        <div className="container-Nav">
          <NavBar/>
          <TextButton/>
        </div>
        <HeroTextBar/>
      </div>
  )
}
