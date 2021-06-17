import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  console.log(match, routeName);
  return (
    <div className="collection-preview">
      <div className="title__main">
        <div className="title__line"></div>
        <h3
          className="title__heading"
          onClick={() => history.push(`${match.path}/${routeName}`)}
        >
          {title}
        </h3>
        <div className="title__line"></div>
      </div>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
export default withRouter(CollectionPreview);
