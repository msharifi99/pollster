import React, { ChangeEvent, FunctionComponent } from "react";
import "./index.scss";
interface TextInputProps {
  placeholder: string;
  value: string;
  onTextChange: (value: string) => void;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  placeholder,
  value,
  onTextChange,
}) => {
  const changeInputHandler = (event: ChangeEvent) => {
    const newValue = (event.target as HTMLInputElement).value || "";
    onTextChange(newValue);
  };

  return (
    <input
      className="text-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={changeInputHandler}
    />
  );
};

export default TextInput;
