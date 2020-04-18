import React from "react";

import  "./index.scss";

interface ScreenProps {
  isOpen: boolean;
  closeClickHandler: () => void;
}

export default function Screen({ isOpen, closeClickHandler }: ScreenProps) {
  const screenShowingClass = isOpen ? "screen--open" : "";
  return (
    <div className={`screen ${screenShowingClass}`}>
      <p>Hello Man How Are You</p>
      <button className="screen__exit-button" onClick={closeClickHandler}>
        X
      </button>
    </div>
  );
}
