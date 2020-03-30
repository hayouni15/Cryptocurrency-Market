import React from 'react'
import './header.css'
import logo from './logo.png'

const containerStyle={
    fontSize:'40px'
}
const Header=()=>{
    return (
        <div className="Header" style={{containerStyle}}>
            <img src={logo} alt="logo" className="Header-logo"></img>
            Header
        </div>
    )
}

export default Header