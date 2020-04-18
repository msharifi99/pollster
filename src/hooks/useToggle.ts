import { useState } from "react";

interface UseToggleInterface {
  state: boolean;
  toggle: () => void;
}

export default function useToggle(initialState: boolean): UseToggleInterface {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = () => setState((prevState) => !prevState);
  return { state, toggle };
}
