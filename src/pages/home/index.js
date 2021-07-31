import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneFilled } from '@ant-design/icons';
import resImg from '../../assets/img/banner_img.png';
import 'typeface-playfair-display';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const HomePage = () => (
  <>
    <div className="reservation">
      <div className="reservation__box">
        <p className="res_paragraph">We Are Here For Your Care</p>
        <h3 className="res_heder">Best Care & Better Doctor</h3>
        <p className="detail__paragraph">
          Our clinics are open for you 24/7. Be save and stay
          at home. Get your online reservation with our best doctors. 
        </p>
        <p className="res__phone">
          <PhoneFilled /> 9090912345
        </p>
        <Link to="/reservation" className="resBtn">
          Make an appointment
        </Link>
      </div>
      <div className="reservation__view">
        <img className="reservation__img" src={resImg} alt="banner" />
      </div>
    </div>
  </> 
);


export default HomePage;
