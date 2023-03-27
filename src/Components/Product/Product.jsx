import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, id, img, price,seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p><small> Manufacturer: {seller}</small></p>
                <p> <small>Rating: {ratings} Star</small> </p>
            </div>
            <button className='add-to-cart-button'>Add to Cart</button>
        </div>
    );
};

export default Product;