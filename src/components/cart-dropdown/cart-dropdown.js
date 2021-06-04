import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";
import CartEmpty from "../../assets/cart-empty.jpg";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <div className="cart-empty-image">
          <img className="empty-image" src={CartEmpty} alt="cart is empty" />
        </div>
      )}
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};
export default connect(mapStateToProps)(CartDropdown);
