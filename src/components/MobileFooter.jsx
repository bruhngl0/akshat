import React from 'react'
import { useState } from 'react';
import {FaPhoneAlt} from 'react-icons/fa'
import { FaLocationArrow } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa6';

const MobileFooter = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className="footerMobile">
      <div className="footer-section-mobile">
        <div className="dots" onClick={toggleExpand}>
          ...
        </div>
        {isExpanded && (
            <>
          <div className="additional-links">
            <h1>PRODUCTS</h1>
            <a href="https://shop.shinesilver.store/collections/necklace-sets">Necklace Sets</a>
            <a href="https://shop.shinesilver.store/collections/pendant-sets">Pendant Sets</a>
            <a href="https://shop.shinesilver.store/collections/all">Catalogue</a>
          
          </div>
            <div className="additional-links">
            <h1>T&C</h1>
            <a href="/shop/product1">Privacy Policy</a>
            <a href="/shop/product2">Return & Exchange Policy</a>
          
          
          </div>
          </>
        )}
      </div>
      <div className='socialmedia-Mobile'>
        <a href='https://www.instagram.com/shinesilver_925?igsh=YTZqNGg3ZHY5cWZ2'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaInstagram className='icons'/>
        </a>

        <a href='https://wa.me/918550022888'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaWhatsapp  className='icons'/>
        </a>

        <a href='https://x.com/shinesilver_925?s=11'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaXTwitter  className='icons'/> 
        </a>

        <a href='https://www.facebook.com/profile.php?id=61555017549608'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaFacebook  className='icons'/> 
        </a>

    
      </div>
      <p className='copyright'>©Copyright 2024, All rights reserved</p>
    </footer>
  )
}

export default MobileFooter
