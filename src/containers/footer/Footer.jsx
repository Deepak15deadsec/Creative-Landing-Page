import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer ">
    <div className="gpt3__footer-heading section__padding">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn ">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      {/* <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
       
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
      
      </div>
    </div>

    {/* <div className="gpt3__footer-copyright">
      <p>@2023 NFT. All rights reserved.</p>
    </div> */}
  </div>
);

export default Footer;
