import React, { useState, useEffect } from "react";
import getPoll from "@/api/getPoll";
import TextInput from "../TextInput";
import { PollInput } from "@/interfaces/Poll";

import "./index.scss";

interface ScreenProps {
  isOpen: boolean;
  closeClickHandler: () => void;
}

export default function Screen({ isOpen, closeClickHandler }: ScreenProps) {
  const [name, setName] = useState("");
  const [pollInputs, setPollInputs] = useState([] as PollInput[]);

  useEffect(() => {
    getPoll().then(({ inputs }) => {
      setPollInputs(inputs);
    });
  },[setPollInputs]);

  const screenShowingClass = isOpen ? "screen--open" : "";
  return (
    <div className={`screen ${screenShowingClass}`}>
      {pollInputs.map((poll) => (
        <TextInput
          key={poll.id}
          placeholder={poll.label}
          value={name}
          onTextChange={setName}
        />
      ))}
      <button className="screen__exit-button" onClick={closeClickHandler}>
        X
      </button>
    </div>
  );
}
