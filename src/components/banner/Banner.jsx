import React from 'react'
import Slider from "react-slick";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';

import '../../styles/home.css';


const Banner = () => {
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed:3000,
        swipeToSlide:true


      };
  return (
    <div>
    <Slider {...settings}> 
      <div>
        <img src={banner1} alt="" />
        <div className='layout__banner'>
        <h2>It's time to start making history together.</h2>
        <h4>BLACKPINK 2nd ALBUM [BORN PINK]🖤</h4>
        </div>
      </div>
      <div>
      <img src={banner2} alt="" />
      <div className='layout__banner'>
        <h2>The more Monthly Photocards you collect, the happier you will be. 🎁</h2>
        <h4>Announcing the artist featured on the Monthly Photocard of September!</h4>
        </div>
      </div>
      <div>
      <img src={banner3} alt="" />
      <div className='layout__banner'>
        <h2>How are these acmé de la vie items recommended by LISA?</h2>
        <h4>Look as hip as LISA this autumn and winter.❣️</h4>
        </div>
      </div>
      <div>
      <img src={banner4} alt="" />
      <div className='layout__banner'>
        <h2>Would you like to meet TREASURE and talk?</h2>
        <h4>Entries for the in-person fan-sign event held in celebration of the release of [THE SECOND STEP : CHAPTER TWO]💎</h4>
        </div>
      </div>
    </Slider>
  </div>
  )
}

export default Banner