import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Login from './login';

const Header = () => (
  <div className="header">
    <div>
      <img src="https://livewellbahamas.com/wp-content/uploads/2017/07/Stethascope-Icon-LWB.png" height="100px" width="100px" alt="logo" />
    </div>
    <div>
      <ul className="navbar">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="link">
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/patients" className="link">
            Patients
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="link">
            Appointment
          </Link>
        </li>
        <li>
          <Login />
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
