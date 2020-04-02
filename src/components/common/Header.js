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
            <Link className="Header-logo" style={{ textDecoration: 'none',color:'white' }} to="/"><div ></div>Crypto Market</Link>
            
            
            <Search/>
        </div>
    )
}

export default Header