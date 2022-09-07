import React from 'react';
import {Routes , Route} from 'react-router-dom';


// import component
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routers = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        
    </Routes>
    </div>
  )
}

export default Routers