import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./cart-icon.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <FaShoppingCart className="shopping-icon" />
      <span className="item-count">02</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
