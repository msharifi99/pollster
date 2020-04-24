import React, { ChangeEvent } from "react";
import CustomFC from "@/interfaces/CustomFC";
import "./index.scss";
interface TextInputProps {
  placeholder: string;
  value: string;
  onTextChange: (value: string) => void;
}

const TextInput: CustomFC<TextInputProps> = ({
  placeholder,
  value,
  className,
  onTextChange,
}) => {
  const changeInputHandler = (event: ChangeEvent) => {
    const newValue = (event.target as HTMLInputElement).value || "";
    onTextChange(newValue);
  };

  return (
    <input
      className={`text-input ${className}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={changeInputHandler}
    />
  );
};

export default TextInput;
