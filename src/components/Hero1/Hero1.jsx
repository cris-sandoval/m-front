import React from 'react'
import "./hero1.css"
import TextButton from '../TexButton/TextButton'
import HeroTextBar from '../HeroTextBar.jsx/HeroTextBar'

export default function Hero1() {
  return (
    <div className="container-main1">
        <div className="container-Nav">
          
          <TextButton/>
        </div>
        <HeroTextBar/>
      </div>
  )
}
