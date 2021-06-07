import React from "react";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart-actions";
import "./checkout-item.scss";
import { connect } from "react-redux";
import { MdDelete } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <AiFillMinusCircle
          className="arrow"
          onClick={() => removeItem(cartItem)}
        />
        <span className="value">{quantity}</span>
        <AiFillPlusCircle className="arrow" onClick={() => addItem(cartItem)} />
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <MdDelete />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
