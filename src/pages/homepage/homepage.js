import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/directory";
// import Hero from "../../components/hero/hero";

const HomePage = () => {
  return (
    <div className="homepage">
      {/*<Hero />*/}
      <Directory />
    </div>
  );
};

export default HomePage;
