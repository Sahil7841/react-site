import React from 'react';
import { Link } from 'react-router-dom'
import "./index.css";



 const Header =() => {
   return (
        <div className='container'>
    <div className='header_h'>
    <Link to={"/"}> Accounts </Link>
    <Link to={"/purchases"}> Purchases </Link>
    <Link to={"/sessions"}> Sessions </Link>
    </div>
</div>
   )
}

export default Header
