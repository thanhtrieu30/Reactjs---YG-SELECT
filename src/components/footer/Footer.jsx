import React from 'react';
import '../../styles/footer.css';
import {FaReact } from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di';
import {TbBrandCss3} from 'react-icons/tb';
import {SiTailwindcss , SiRedux} from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer__row'>
            <div className='footer__col'>
                <h4>CUSTOMER SERVICE</h4>
                <h4 className="tel">en@ygselect.com</h4>
                <span>Weekdays: 9:00AM-6:00PM (GMT+9H)</span>
                <span>Lunchtime: 12:30PM-1:30PM (GMT+9H)</span>
                <span>Closed on weekends and holidays</span>
            </div>
            <div className='footer__col'>
                <h4>CUSTOMER CENTER</h4>
                <div className='sub__title'>
                  <p>HELP</p>
                  <p>ORDER HISTORY</p>
                  <p>NOTICE</p>
                  <p>FAQ</p>
                  <p>Contact Us</p>
                  <p>OUR STORES</p>
                </div>
            </div>
            <div className='footer__col'>
              <h4>MY SHOP</h4>
              <div className='sub__title'>
                  <p> MY PROFILE</p>
                  <p>SHOPPING BAG</p>
                  <p>HEART</p>
                  <p>REWARD POINTS</p>
                  <p>MY PAGE</p>
                </div>
            </div>
            <div className='footer__col'>
              <h4>YG FAMILY SITE</h4>
              <div className='sub__title'>
                  <p>YG FAMILY</p>
                  <p>YG LIFE</p>
                  <p>YG PLUS</p>
                  <p>YG MUSIC</p>
                  <p>INSTAGRAM</p>
                  <p>FACEBOOK</p>
                  <p>YOUTUBE</p>
                  <p>TWITTER</p>
                </div>
            </div>
            <div className='footer__col'>
              <h4>ABOUT US</h4>
              <div className='sub__title'>
                  <p> ABOUT US</p>
                  <p>TERMS & CONDITIONS</p>
                  <p>PRIVACY POLICY</p>
                  <p>VERIFY LICENSE</p>
                  <p>MERCHANDISE IDEAS</p>
                  <p>PARTNERSHIP PROPOSAL</p>
                </div>
            </div>
        </div>
        <div className="footer__row2">
              <h5>ABOUT MY SKILLS</h5>
              <div className='footer__icon'>
                    <ul className='ul__icon'>
                      <li className='icon'><FaReact /></li>
                      <li className='icon'><DiJavascript1 /></li>
                      <li className='icon'><SiRedux /></li>
                      <li className='icon'><TbBrandCss3 /></li>
                      <li className='icon'><SiTailwindcss /></li>
                    </ul>
              </div>
        </div>
    </footer>
  )
}

export default Footer