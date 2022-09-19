import React from 'react'
import {NavLink } from 'react-router-dom'
import '../../styles/headermenu.css'



const nav__link = [
    {
        display: 'HOME',
        path: '/home'
    },
    {
        display: 'PRODUCTS',
        path: '/product'
    },
    {
        display: 'SELECT',
        path: '/updating'
    },
    {
        display: 'CONTACT',
        path: '/updating'
    },
]

const nav__link2 = [
    {
        display: 'EVENT',
        path: '/updating'
    },
    {
        display: 'STORY',
        path: '/updating'
    },
    {
        display: 'REVIEW',
        path: '/updating'
    },
    
]


const HeaderMenu = () => {

    
  return (
    <div className='menu'>
        {
            nav__link.map((item,index) => (
                <h5 className='headermenu'><NavLink to={item.path} key={index}>{item.display}</NavLink></h5>
            ))
        }

        <span></span>

        {
            nav__link2.map((item,index) => (
                <h5 className='headermenu'><NavLink to={item.path} key={index}>{item.display}</NavLink></h5>
            ))
        }
    </div>
  )
}

export default HeaderMenu