import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="single-post"> 
    <div className="single-post-wrapper">
        <img src="./images/chest.png" alt="" className="single-post-img" />
        <h1 className="single-post-title"> Lorem ipsum dolor. 
        <div className="single-post-edit">
        <i className="single-post-icon fa-solid fa-pen-to-square"></i>
        <i className="single-post-icon fa-solid fa-trash-can"></i>
        </div>
         </h1>


         <div className="single-post-info">
            <span className="single-post-author">Author: <b>Bineta</b></span>
            <span className="single-post-date"> 1 hour ago</span>
            </div>
            
            <p className="single-post-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste, totam et omnis minus soluta expedita molestias cumque 
                animi perspiciatis qui harum earum sint voluptate? Aspernatur \
                excepturi aperiam eum in? Temporibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, 
                totam et omnis minus soluta expedita molestias cumque animi perspiciatis qui
                 harum earum sint voluptate? Aspernatur excepturi aperiam eum in? Temporibus.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste, totam et omnis minus soluta expedita molestias cumque 
                animi perspiciatis qui harum earum sint voluptate? Aspernatur \
                excepturi aperiam eum in? Temporibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, 
                totam et omnis minus soluta expedita molestias cumque animi perspiciatis qui
                 harum earum sint voluptate? Aspernatur excepturi aperiam eum in? Temporibus.

            </p>
       
    </div>
    </div>
  )
}
