import React from "react";

import useToggle from "@/hooks/useToggle";

import Widget from "../Widget";
import Screen from "../Screen";
import "./App.scss";

function App() {
  const { state, toggle } = useToggle(false);
  return (
    <div className="app">
      <Widget widgetClickHandler={toggle} />
      <Screen isOpen={state} closeClickHandler={toggle} />
    </div>
  );
}

export default App;
