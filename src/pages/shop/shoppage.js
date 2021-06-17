import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import WithSpinner from "../../components/with-spinner/with-spinner";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";
import { updateCollections } from "../../redux/shop/shop-actions";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page" style={{ padding: "20px 60px" }}>
        <Route
          exact
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
          path={`${match.path}`}
        />
        <Route
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
          path={`${match.path}/:collectionId`}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
