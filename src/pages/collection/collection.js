import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import Title from "../../components/title/title";
import { selectCollection } from "../../redux/shop/shop-selectors";
import "./collection.scss";
import { connect } from "react-redux";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <Title title={title} />
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
