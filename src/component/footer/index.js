import React from 'react';
import {
  FacebookFilled,
  InstagramFilled,
  GoogleCircleFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';
import './style.css';

const Footer = () => (
  <div className="footer">
    <div>
      <p className="text-white"><b>Know Us</b></p>
      
        <a href="">About Us</a> <br/>
        <a href="">Contact Us</a>
      
    </div>
   
    <div>
    <p className="text-white"><b>Our Policies</b></p>
      
        <a href="">Privacy Policy</a> <br/>
        <a href="">Terms and Conditions</a>
      
    </div>

    <div>
    <p className="text-white"><b>Our Services</b></p>
      
        <a href="">Care Plan</a> <br/>
        <a href="">Consult a doctor</a>
      
    </div>

    <div className="cpy">
      <p>
        Copyright ©2021 All rights reserved | This website is made by Abraham Paul
      </p>
    </div>
    <p className="text-white">Social Links</p>
    <div className="social">
      
      <FacebookFilled />
      <TwitterCircleFilled />
      <GoogleCircleFilled />
      <InstagramFilled />
    </div>
  </div>
);
export default Footer;
