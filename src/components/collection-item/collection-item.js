import React from "react";
import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart-actions";
import "./collection-item.scss";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
  const { price, name, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <h3 className="name">{name}</h3>
        <div className="raiting">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStarHalfAlt className="star" />
        </div>
        <h4 className="price">{price} $</h4>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
