import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {name, id, img, price,seller, ratings} = props.product;
    const addToCardHand = props.addToCardHand; 
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p><small> Manufacturer: {seller}</small></p>
                <p> <small>Rating: {ratings} Star</small> </p>
            </div>
            <button onClick={()=>addToCardHand(props.product)} className='add-to-cart-button'>
                Add to Cart
                 <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;