import { useState } from "react";

export default function useToggle(defaultValue: boolean) {
  const [isToggled, setIsToggled] = useState(defaultValue);

  function toggle(force?: boolean) {
    setIsToggled(prev => force ?? !prev);
  }

  return [isToggled, toggle] as const;
}
