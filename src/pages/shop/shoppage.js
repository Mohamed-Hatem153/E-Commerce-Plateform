import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page" style={{ padding: "20px 60px" }}>
      <Route exact component={CollectionsOverview} path={`${match.path}`} />
      <Route component={CollectionPage} path={`${match.path}/:collectionId`} />
    </div>
  );
};
export default ShopPage;
