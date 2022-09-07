import React from 'react'

import bornPink from '../../assets/images/born__pink.jpg' ;
import '../../styles/firstHeader.css'

const FirstHeader = () => {
  return (
    <div className='first__Header'>
        <img src={bornPink} alt="bornPink" />
    </div>
  )
}

export default FirstHeader