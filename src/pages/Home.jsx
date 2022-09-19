import React from 'react'
import Banner from '../components/banner/Banner';
import Helmet from '../components/helmet/Helmet';
import Products from '../components/product/Products';

import '../styles/home.css'

const Home = () => {
  return (
    <Helmet title={`YG'PICK`}>
      <div className='home__banner'>
        <Banner />
      </div>
      <div>
        <Products />
      </div>
    </Helmet>
  )
}

export default Home