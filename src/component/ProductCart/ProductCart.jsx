import React from 'react';
import './ProductCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ProductCart = (props) => {
    const { img, name, price, quantity, ratings, seller } = props.product
    // console.log(props.product)

    const addToCart = props.addToCart

    return (
        <div className='card-container'>
            <img src={img} alt="" />
            <div className='card-items'>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={()=>{addToCart(props.product)}} className='btn-addToCart'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default ProductCart;