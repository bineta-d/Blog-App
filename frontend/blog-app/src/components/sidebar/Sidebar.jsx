import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img src="./images/woman.webp" alt="" className='sidebar-img' />
           <p className='sidebar-desc'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate at ullam beatae autem voluptates iste maiores fuga dicta laborum ipsum,
             vero tempora aliquid id rerum molestias minima sint sunt est.</p>
        </div>

        <div className="sidebar-item">
            <span className="sidebar-title">CATEGORIES</span>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">Life</li>
                <li className="sidebar-list-item">Music</li>
                <li className="sidebar-list-item">Style</li>
                <li className="sidebar-list-item">Sport</li>
                <li className="sidebar-list-item">Tech</li>
                <li className="sidebar-list-item">Cinema</li>
            </ul>
        </div>

        <div className="sidebar-item">
            <span className="sidebar-title">FOLLOW US</span>
            <div className="sidebar-social">
                <i class= "sidebar-icon fa-brands fa-square-facebook">  </i>
                <i class="sidebar-icon fa-brands fa-square-twitter"></i>
                <i class= "sidebar-icon fa-brands fa-square-pinterest"></i>
                <i class= "sidebar-icon fa-brands fa-square-instagram"></i>
            </div>
        </div>



    </div>
  )
}
