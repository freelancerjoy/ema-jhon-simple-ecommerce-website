import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import Reviewitems from "../Reviewitems/Reviewitems";
import "./Order.css";
import { removeFromDb } from "../../utilities/fakedb";
import { deleteShoppingCart } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  console.log(cart);
  const remveProdutHandle = (id) => {
    const remainig = cart.filter((product) => product.id !== id);
    setCart(remainig);
    removeFromDb(id);
  };
  const clearAllCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <Reviewitems
            key={product.id}
            product={product}
            remveProdutHandle={remveProdutHandle}></Reviewitems>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart} clearAllCart={clearAllCart}>
          <Link className="procced-link" to="/checkout">
            <button className="proccesd-button">
              Procced Checkout{" "}
              <FontAwesomeIcon className="clear-icon" icon={faIdCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
