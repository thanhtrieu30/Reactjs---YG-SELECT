import React from 'react'

import {Link} from 'react-router-dom'
import american from '../../assets/images/america.png'
import logo from '../../assets/images/logo.png'

import {useSelector} from 'react-redux'

import '../../styles/header.css'
import HeaderMenu from '../UI/HeaderMenu';

const Header = () => {

  const totalQuantity = useSelector(state=> state.cart);
  const totalItems = totalQuantity.reduce((total,product) => {
        return total + product.qty;
  },0)
  return (
    <div >
        <div className='top__header'>
          <div className='top__header__left'>
            <h5>Set your favorite YG artist as Main.</h5>
            <h6 className='top__header__left__title top__header__hover'>SETTING</h6>
          </div>
          <div className='top__header__right'>
            <Link to='/signin'><h5 className='top__header__hover'>Sign IN</h5></Link>
            <Link to='/signup'><h5 className='top__header__hover'>Sign UP</h5></Link>
            <Link to='/signup'><h5 className='top__header__hover'>Order History</h5></Link>
            <p><img src={american} alt="" /><i class="ri-arrow-down-s-fill"></i></p> 
          </div>
        </div>

        <div className='bottom__header'>
          <div className='bottom__header__sub'>
              <div className='logo'> 
                <Link to='/home'><img src={logo} alt="" /></Link>
              </div>
              <div className='bottom__header__all'>
                <div className='bottom__header__category'>
                    <HeaderMenu />
                </div>
                <div className='bottom__header__icon'>
                      <i class="ri-search-eye-line"></i>
                      <i class="ri-hearts-line"></i>
                     <Link to='/cart'>  <i class="ri-shopping-bag-line">({totalItems})</i></Link>
                      
                </div>
              </div>
          </div>
            
        </div>


    </div>
  )
}

export default Header