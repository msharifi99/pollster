import { FunctionComponent } from "react";

type WithClassName<T extends {}> = T & {
  className?: string;
};

type CustomFC<T> = FunctionComponent<WithClassName<T>>;

export default CustomFC;
