import React from 'react'
import Banner from '../components/banner/Banner';
import Helmet from '../components/helmet/Helmet';

import '../styles/home.css'

const Home = () => {
  return (
    <Helmet title={`YG'PICK`}>
      <div className='home__banner'>
        <Banner />
      </div>
    </Helmet>
  )
}

export default Home