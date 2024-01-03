import { useState } from 'react';

type ToggleReturnType = [boolean, () => void, (value: boolean) => void];

const useToggle = (initialState = false): ToggleReturnType => {
  const [visible, setVisibility] = useState<boolean>(initialState);

  const toggle = (): void => setVisibility((prev: boolean) => !prev);

  const setToggleStatus = (value: boolean): void => setVisibility(Boolean(value));

  return [visible, toggle, setToggleStatus];
};

export default useToggle;
