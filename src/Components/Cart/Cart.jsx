import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let totalPrice = 0;
    let totalShipping = 0;
    for(const price of cart){
        totalPrice = totalPrice + price.price;
        totalShipping = totalShipping + price.shipping;
    }
    let tax = totalPrice * 7 / 100;
    let grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;