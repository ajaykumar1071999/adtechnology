import React from 'react';
import logo from '../Assets/logo.png';
import {Link} from 'react-router-dom'
import '../Style/Header/Header.css';
export default function Header() {
  return (
    <div>
    
      <section className='header-section'>
      <header className='nav-header'>
        <nav className='header-nav'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='header-logo'>
              <img src={logo} alt="Logo"/>
            </div>
            <div className='nav-item'>
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Courses">Courses</Link>
                </li>
                <li>
                  
                  <Link to="Consultation">Consultations</Link>
                </li>
                <li>
                  
                  <Link to="Activities">Activities</Link>
                </li>
                <li>
                  
                  <Link to="Events">Events</Link>
                </li>
                <li>
                  
                  <Link to="Careers">Careers</Link>
                </li>   
              </ul>
            </div>
            <div className='user-login'>
               <div className='support-user'>
               <button className='btn btn-sm btn-danger'>
               <i className='fas fa-headset'></i>
               </button>
                
               </div>
               <div className='login-user'>
               <button className='btn btn-sm btn-danger'>
               <i className='fa fa-user'></i>
               </button>
               </div>
            </div>
          </div>
          </div>
        </nav>
      </header>

      </section>
      
    </div>
  )
}
