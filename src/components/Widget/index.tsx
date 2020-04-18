import React from "react";
import "./index.scss";

type WidgetProps = {
  widgetClickHandler: () => void;
};

function Widget({ widgetClickHandler }: WidgetProps) {
  return (
    <button className="widget" onClick={widgetClickHandler}>
      Pollster
    </button>
  );
}

export default Widget;
