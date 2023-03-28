import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (product)=>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='products-container'>
            <div className="products">
                {
                    products.map(product=> <ProductCart
                    key = {product.id}
                    product = {product}
                    addToCart = {addToCart}
                    ></ProductCart>)
                }
            </div>

            <div className="products-summary">
                <h4>Summary Here: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Products;