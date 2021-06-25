import React, { useEffect } from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview-container";
import CollectionPageContainer from "../collection/collection-container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);
  return (
    <div
      className="shop-page"
      style={{
        padding: "20px 60px",
        position: "relative",
        marginTop: "70px",
      }}
    >
      <Route
        exact
        component={CollectionsOverviewContainer}
        path={`${match.path}`}
      />
      <Route
        component={CollectionPageContainer}
        path={`${match.path}/:collectionId`}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
