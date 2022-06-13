import React from "react";
import { Switch, Route } from "react-router";
import { Home } from "./pages/Home/components/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";
function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/month-statistics" exact component={MonthStatistics} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
