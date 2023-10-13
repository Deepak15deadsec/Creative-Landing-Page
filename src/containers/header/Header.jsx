import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing in NFT World</h1>
      <p>Experience a new interactive UNDW3 adventure and evolve your Lacoste UNDW3 Card. Each UNDW3 chapter is directly linked to your commitment. Get ready to solve quests, engage with Lacoste, and unlock exclusive UNDW3 benefits.</p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <button className="dark-theme-button" type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
