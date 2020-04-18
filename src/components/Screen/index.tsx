import React, { useState } from "react";
import TextInput from "../TextInput";

import "./index.scss";

interface ScreenProps {
  isOpen: boolean;
  closeClickHandler: () => void;
}

export default function Screen({ isOpen, closeClickHandler }: ScreenProps) {
  const [name, setName] = useState("");
  const screenShowingClass = isOpen ? "screen--open" : "";
  return (
    <div className={`screen ${screenShowingClass}`}>
      <TextInput
        placeholder="Enter Your Name"
        value={name}
        onTextChange={setName}
      />
      <button className="screen__exit-button" onClick={closeClickHandler}>
        X
      </button>
    </div>
  );
}
