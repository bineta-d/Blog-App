import './register.css'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';


export default function Register() {
  return (
    <div className='register'>
        <span className="register-title">Register</span>
        <form action="" className="register-form">
        <label htmlFor="email">Username</label>
            <input type="text" className='register-input' placeholder="Enter your username..."/>
           
            <label htmlFor="email">Email</label>
            <input type="email" className='register-input' placeholder="Enter your email..."/>
            <label htmlFor="password">Password</label>
            <input type="password"  className='register-input' placeholder="Enter your password..." />
            <button className="register-button">Register</button>
            </form>
            <button className="register-login-button"> <Link to="/login">LOGIN</Link></button>
           
    </div>
  )
}
