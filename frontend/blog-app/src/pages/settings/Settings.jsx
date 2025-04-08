import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settings-wrapper">
            <div className="settings-title">
                <span className="settings-update-title">Update Account</span>
                <span className="settings-delete-title">Delete Account</span>
            </div>
            <form action="" className="settings-form">
                <label htmlFor="" className="profile-pic">Profile Picture</label>
                <div className="settings-pp">
                    <img src="./images/chest.png" alt="" />
                    <label htmlFor="file-input"> 
                        <i className="settings-pp-icon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="file-input" style={{display:"none"}} />
              </div>

              <label htmlFor="">Username</label>
              <input type="text"  placeholder='Bineta' />
              <label htmlFor="">Email</label>
              <input type="email"  placeholder='Binet@gmail.com'/>
              <label htmlFor="">Password</label>
              <input type="password"  />

              <button className="settings-submit">Update</button>
            </form>
        </div>

        <Sidebar/>
    </div>
  )
}
