import React from "react";
import "./Reviewitems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Reviewitems = ({ product, remveProdutHandle }) => {
  const { name, id, img, quantity, price } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="title">{name}</p>
        <p className="description">
          Price: <span className="orange-text">${price}</span>
        </p>
        <p className="description">
          Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button onClick={() => remveProdutHandle(id)} className="delete-btn">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Reviewitems;
