import React from 'react';
import {FaPhoneAlt} from 'react-icons/fa'
import { FaLocationArrow } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='one'>
        <h1>DISCOVER JWELLERY</h1>
        <ul>
          <li><a href="#">Pendant Sets</a></li>
          <li><a href="#">Necklace</a></li>
        </ul>
      </div>

      <div className='two'>
        <h1>OUR COMPANY</h1>
        <ul>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>

      <div className='three'>
        <h1>CUSTOMER CARE</h1>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Returns & Exchange</a></li>
          <li><a href="#">Cancellations Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Bulk Order</a></li>
        </ul>
      </div>

      <div className='four'>
        <h1>CONTACT US</h1>
        
        <div className='phone'>
        <FaPhoneAlt />
        <span> <a href= "tel:+918550022888">+91 8550022888 </a></span>
        </div>

        <div className='mail'>
       <MdMailOutline />
       <span>
        <a href = "mailto:support@shinesilver.store">support@shinesilver.store</a>
       </span>
      </div>

        <div className='location'>
        <FaLocationArrow />
        <span>
          <a href="geo:12.9716,77.5946?q=Vijay Nagar, Bangalore 560040">Bangalore, Vijayanagar, 560040</a>
        </span>
      </div>

     

      <div className='socialmedia'>
        <a href='https://www.instagram.com/shinesilver_925?igsh=YTZqNGg3ZHY5cWZ2'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaInstagram />
        </a>

        <a href='https://wa.me/918550022888'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaWhatsapp />
        </a>

        <a href='https://x.com/shinesilver_925?s=11'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaSquareXTwitter /> 
        </a>
      </div>
      </div>


    </div>
  );
};

export default Footer;
