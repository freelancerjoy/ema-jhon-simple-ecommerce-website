import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        // step 1: get id
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart){
            // step 2: get the product by using id 
            const addProduct = products.find(product => product.id === id);
            if(addProduct){
               // step 3: quantity of the product 
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            // step 4: save the cart 
            saveCart.push(addProduct)
            }
            
        }
        // step 5: set the cart 
        setCart(saveCart);
    },[products])


    const addToCardHand = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                  products.map(product => <Product key={product.id} product={product} addToCardHand={addToCardHand}> </Product>)  
                }
            </div>
            <div className='order-summary'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;