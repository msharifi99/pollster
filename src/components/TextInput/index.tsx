import React, { ChangeEvent } from "react";
import "./index.scss";
interface TextInputProps {
  placeholder: string;
  value: string;
  onTextChange: (value: string) => void;
}

export default function TextInput({
  placeholder,
  value,
  onTextChange,
}: TextInputProps) {
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
}
