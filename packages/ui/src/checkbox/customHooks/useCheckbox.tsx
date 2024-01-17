

import { useState } from 'react';

// customHook for checkbox
export const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return {
    isChecked,
    onChange: () => { setIsChecked(!isChecked); },
  }
}