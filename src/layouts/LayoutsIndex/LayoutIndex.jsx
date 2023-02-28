import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./layoutindex.css"

export default function LayoutIndex(props) {
    let {children} = props

    return ( 
    <>
        <NavBar/>
        {children}
    </>
  )
}
