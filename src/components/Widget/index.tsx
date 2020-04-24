import React, { FunctionComponent } from "react";
import "./index.scss";

type WidgetProps = {
  widgetClickHandler: () => void;
};

const Widget: FunctionComponent<WidgetProps> = ({ widgetClickHandler }) => {
  return (
    <button className="widget" onClick={widgetClickHandler}>
      Pollster
    </button>
  );
};

export default Widget;
