import './App.css';
import Navbar from './components//navbar/Navbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from "./pages/Home/Home"
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ReactDOM from 'react-dom/client';
import { Routes, Route} from 'react-router';

function App() {
  return ( 
    <div className="app">
      <Navbar/>
      <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
             <Route path="/" element={<Home />} />
              <Route path="/write" element={<Write />} />
              <Route path="/settings" element={<Settings />} />
               <Route path="/single" element={<Single />} />   
      </Routes>
    
    </div>
  );
}

export default App;

{/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/single" element={<Single />} />
      </Routes> */}