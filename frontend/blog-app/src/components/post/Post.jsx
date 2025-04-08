import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post" id='post'>
      <img src="./images/city8.webp" alt="" className="post-img" />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>

        <span className="post-title">Lorem ipsum</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>

      <p className='post-desc'
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste incidunt adipisci iure explicabo quisquam cupiditate molestiae omnis dicta quidem eum sunt odit laudantium esse vitae voluptates, eius tenetur quibusdam culpa.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste incidunt adipisci iure explicabo quisquam cupiditate molestiae omnis dicta quidem eum sunt odit laudantium esse vitae voluptates, eius tenetur quibusdam culpa.

    </p>
    
    </div>
  )
}
