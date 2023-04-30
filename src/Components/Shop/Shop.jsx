import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // step 1: get id
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
      // step 2: get the product by using id
      const addProduct = products.find((product) => product.id === id);
      if (addProduct) {
        // step 3: quantity of the product
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        // step 4: save the cart
        saveCart.push(addProduct);
      }
    }
    // step 5: set the cart
    setCart(saveCart);
  }, [products]);

  const addToCardHand = (product) => {
    let newCart = [];
    // const newCart = [...cart, product];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remainig = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remainig, exist];
    }

    setCart(newCart);
    addToDb(product.id);
  };
  const clearAllCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCardHand={addToCardHand}>
            {" "}
          </Product>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart} clearAllCart={clearAllCart}>
          <Link className="procced-link" to="/order">
            <button className="proccesd-button">
              Order VIew{" "}
              <FontAwesomeIcon
                className="clear-icon"
                icon={faArrowCircleRight}
              />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
