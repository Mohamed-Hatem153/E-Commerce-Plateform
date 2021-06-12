import React from "react";
import "./cart-item.scss";
import { clearItemFromCart } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
import { MdDeleteForever } from "react-icons/md";

const CartItem = ({ item, clearItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}$
          <span className="delete-btn">
            <MdDeleteForever onClick={() => clearItem(item)} />
          </span>
        </span>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
