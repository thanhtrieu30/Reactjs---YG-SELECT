import React from 'react'
import FirstHeader from '../firstHeader/FirstHeader';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routers from '../../routes/Routers'


const Layout = () => {
  return (
    <div>
        <FirstHeader />
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </div>
  )
}

export default Layout