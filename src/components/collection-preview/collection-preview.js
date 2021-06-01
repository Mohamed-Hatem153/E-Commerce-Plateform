import React from "react";
import CollectionItem from "../collection-item/collection-item";
import Title from "../title/title";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <Title title={title.toUpperCase()} />
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
