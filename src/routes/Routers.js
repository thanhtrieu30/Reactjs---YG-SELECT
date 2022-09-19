import React from 'react';
import {Routes , Route} from 'react-router-dom';
import InfoProduct from '../components/product/InfoProduct';
import Products from '../components/product/Products';
import Cart from '../components/cart/Cart'


// import component
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Update from '../update/Update';

const Routers = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/product/:id' element={<InfoProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/updating' element={<Update />} />

        
    </Routes>
    </div>
  )
}

export default Routers