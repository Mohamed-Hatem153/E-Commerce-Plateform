import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

const hatsPage = () => {
  return <div>HAT PAGE</div>;
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={hatsPage} />
      </Switch>
    </div>
  );
}

export default App;
