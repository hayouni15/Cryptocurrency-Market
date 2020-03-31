import React from 'react'
import './header.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import Search from "./search"

const containerStyle={
    fontSize:'40px'
}
const Header=()=>{
    return (
        <div className="Header" style={{containerStyle}}>
            <Link to="/"><img src={logo} alt="logo" className="Header-logo"></img></Link>
            
            Crypto Market
            <Search/>
        </div>
    )
}

export default Header