import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className='write'>

        <img src="./images/city7.jpg" alt="" className="write-img" />
        <form action="" className="write-form">
            <div className="write-form-group">
                <label htmlFor="">
                    <i className=' write-icon fas fa-plus'></i>
                </label>
            
                <input type="file"  id="file-input"  style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="write-input" autoFocus={true} />
            </div>

            <div className="write-form-group">
            <textarea  placeholder="Tell your story..." type="text" className="write-input write-text"></textarea>
            </div>

            <button className="write-submit">Publish</button>
        </form>
    </div>
  )
}
