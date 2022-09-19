import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../../styles/products.css';
import {Link} from 'react-router-dom'


const Products = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentsMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentsMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentsMounted = false;
            }
        }
        getProducts();
    },[])

    const Loading = () => {
        return (
            <>
            Loading...
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat)
        setFilter(updateList)
    }
    const ShowProducts = () => {
        return (
            <div>
                <div className='showProducts'>
                    <button className='btn__products' onClick={() => setFilter(data)}>All</button>
                    <button className='btn__products' onClick={() => filterProduct("men's clothing")}>Men</button>
                    <button className='btn__products' onClick={() => filterProduct("women's clothing")}>Women</button>
                    <button className='btn__products' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn__products' onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>

            </div>
        )

    }

    
  return (
    <div className='products'>
        <div className="product__title">
            <h1>Product</h1>
            <hr />
        </div>
        <div>
            {loading ? <Loading /> : <ShowProducts />}
        </div>
        <div className='product__card'>
            {
                filter.map((product) => (
                    <div className='col'>
                        <div className='card'>
                            <img src={product.image} alt="card" />
                            <div>
                                <h5>{product.title.substring(0,12)}...</h5>
                                <p className='price'>${product.price}</p>
                                <Link to={`/product/${product.id}`} className="btn__buy">
                                         Buy now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Products