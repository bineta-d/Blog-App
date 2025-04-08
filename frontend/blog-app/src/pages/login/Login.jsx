import './login.css'
import { Link } from 'react-router';


export default function Login() {
  return (
    <div className='login'>
        <span className="login-title">Login</span>
        <form action="" className="login-form">
            <label htmlFor="email">Email</label>
            <input type="email" className='login-input' placeholder="Enter your email..."/>
            <label htmlFor="password">Password</label>
            <input type="password"  className='login-input' placeholder="Enter your password..." />
            <button className="login-button">Login</button>
            </form>
            <button className="login-register-button"><Link to="/register">REGISTER</Link></button>
            
    </div>
  )
}
