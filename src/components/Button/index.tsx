import React, {
  FunctionComponent,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";
import CustomFC from "@/interfaces/CustomFC";
import "./index.scss";

type ButtonEvent = MouseEvent<HTMLButtonElement>;
type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>["type"];
interface ButtonProp {
  children: string | FunctionComponent;
  nativeType?: ButtonTypes;
  onClick(event: ButtonEvent): void;
}

const Button: CustomFC<ButtonProp> = ({
  children,
  nativeType = "button",
  onClick,
}) => {
  return (
    <button className="button" type={nativeType} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
