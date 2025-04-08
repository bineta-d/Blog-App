import React from 'react'
import { Link } from 'react-router';
import "../navbar/navbar.css"


export default function Navbar() {

  return (
    <div className='nav'>
        <div className="topLeft">
         <i class=" top-social-icon fa-brands fa-square-facebook">  </i>
        <i class=" top-social-icon fa-brands fa-square-twitter"></i>
         <i class=" top-social-icon fa-brands fa-square-pinterest"></i>
         <i class=" top-social-icon fa-brands fa-square-instagram"></i>
        </div>

        <div className="topCenter">
            <ul className="top-List">
                <li className="top-list-item top-icon navBarItem">
                  <Link to="/" className='link'>HOME</Link>
                </li>
                <li className="top-list-item top-icon navBarItem">
                  <Link to="/about" className='link'>ABOUT</Link>
                </li>
                <li className="top-list-item top-icon navBarItem">
                  <Link to="/contact" className='link'>CONTACT</Link>
                </li>
                <li className="top-list-item top-icon navBarItem">
                  <Link to="/write" className='link'>WRITE</Link>
                </li>
                  <button>LOGOUT</button>
            </ul>
           </div>

        <div className="topRight">
          <img src="./images/city4.jpg" alt=""  className='navImage'/>
          <ul className='top-list'>
           <li className='top-list-item'> <Link className='link'  to="/login">LOGIN</Link></li>
           <li className='top-list-item'> <Link className='link'  to="/register">REGISTER</Link></li>
            </ul>
    
            <i class=" top-search-icon fa-solid fa-magnifying-glass"></i>
        </div>
        
    </div>
  )
}
