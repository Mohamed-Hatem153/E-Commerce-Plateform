import React from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview-container";
import CollectionPageContainer from "../collection/collection-container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selectors";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page" style={{ padding: "20px 60px" }}>
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
