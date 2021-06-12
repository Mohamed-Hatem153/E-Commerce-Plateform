import React from "react";
import MenuItem from "../menu-item/menu-item";
import Title from "../title/title";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import "./directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory">
      <Title title="Shop Collections" />
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
