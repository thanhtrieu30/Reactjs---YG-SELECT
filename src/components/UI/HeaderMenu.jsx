import React from 'react'
import {NavLink } from 'react-router-dom'
import '../../styles/headermenu.css'

const nav__link = [
    {
        display: 'ARTIST',
        path: '/artist'
    },
    {
        display: 'CATEGORY',
        path: '/category'
    },
    {
        display: 'SELECT',
        path: '/select'
    },
    {
        display: 'CUSTOM',
        path: '/custom'
    },
]

const nav__link2 = [
    {
        display: 'EVENT',
        path: '/event'
    },
    {
        display: 'STORY',
        path: '/story'
    },
    {
        display: 'REVIEW',
        path: '/review'
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