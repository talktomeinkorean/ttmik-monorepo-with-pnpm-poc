import { useCallback, useState } from 'react';

// Assuming getAriaAttributes is defined elsewhere and passed as a prop
interface UseDropDownProps {
  getAriaAttributes?: () => {
    role: string;
    "aria-expanded": boolean;
    "aria-activedescendant": string | undefined;
  };
}

interface DropDownState {
  isOpen: boolean;
  toggleDropdown: () => void;
  ariaAttributes: {
    role: string;
    "aria-expanded": boolean;
    "aria-activedescendant": string | undefined;
  };
}

export const useDropDown = ({ getAriaAttributes }: UseDropDownProps = {}): DropDownState => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const ariaAttributes = getAriaAttributes ? getAriaAttributes() : {
    role: 'dropdown',
    'aria-expanded': isOpen,
    'aria-activedescendant': undefined
  };

  return {
    isOpen,
    toggleDropdown,
    ariaAttributes
  };
}
