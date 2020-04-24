import React, { FunctionComponent } from "react";

import useToggle from "@/hooks/useToggle";

import Widget from "../Widget";
import Screen from "../Screen";
import "./App.scss";

const App: FunctionComponent = () => {
  const { state, toggle } = useToggle(false);
  return (
    <div className="app">
      <Widget widgetClickHandler={toggle} />
      <Screen isOpen={state} closeClickHandler={toggle} />
    </div>
  );
};

export default App;
