import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import '../../styles/infoproduct.css'

import {useDispatch} from 'react-redux'
import { addItem } from '../../store/shopping-cart/cartSlice';

const InfoProduct = () => {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading , setLoading] = useState(false);
    const dispatch = useDispatch();
    

    useEffect(()=> {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false); 
        }
        getProduct();
    },[])

    const handleAddItem = () => {
        dispatch(addItem(product));
    };

    const Loading = () => (
        <>
            Loading...
        </>
    )

    const ShowProduct = () => (
        <div className='showInfoProduct'> 
        <div>
           <img src={product.image} alt="img" className='info__img' />
        </div>
        <div className='detail'>
            <h4 className="product__category">{product.category}</h4>
            <p className="product__name">{product.title}</p>
            <p className="product__rating">
                        Rating {product.rating && product.rating.rate}
                       
            </p>
            <h2 className="product__price "> $ {product.price}</h2>
            <p className="product__desc">{product.description}</p>
            <div className='buttonnn'>
                        <button
                            className=" btn--add"
                            onClick={() => {
                                handleAddItem();
                            }}
                        >
                            Add to cart
                        </button>
                        <Link to="/cart" className=" btn--go">
                           {`-->`} Go to cart
                        </Link>
            </div>
        </div>
           
        </div>
    )


  return (

    <div className='info__product'>
        <div>
        {
            loading ? <Loading />  : <ShowProduct />
        }
        </div>
        
    </div>
  )
}

export default InfoProduct