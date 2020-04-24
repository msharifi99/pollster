import React, { useState, useEffect, FunctionComponent } from "react";
import getPoll from "@/api/getPoll";
import TextInput from "../TextInput";
import Button from "../Button";
import { PollInput } from "@/interfaces/Poll";

import "./index.scss";

interface ScreenProps {
  isOpen: boolean;
  closeClickHandler: () => void;
}

const Screen: FunctionComponent<ScreenProps> = ({
  isOpen,
  closeClickHandler,
}) => {
  const [name, setName] = useState("");
  const [pollInputs, setPollInputs] = useState([] as PollInput[]);

  useEffect(() => {
    getPoll().then(({ inputs }) => {
      setPollInputs(inputs);
    });
  });

  const screenShowingClass = isOpen ? "screen--open" : "";
  return (
    <div className={`screen ${screenShowingClass}`}>
      <button className="screen__exit-button" onClick={closeClickHandler}>
        X
      </button>
      <div>
        {pollInputs.map((poll) => (
          <TextInput
            className="screen__input"
            key={poll.id}
            placeholder={poll.label}
            value={name}
            onTextChange={setName}
          />
        ))}
      </div>
      <div className="screen__actions">
        <Button onClick={() => {}}>Submit</Button>
      </div>
    </div>
  );
};

export default Screen;
