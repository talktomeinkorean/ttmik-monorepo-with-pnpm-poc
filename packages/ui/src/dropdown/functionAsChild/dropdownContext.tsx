import type { RefObject } from "react";


export interface DropdownProps {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  toggleDropdown?: () => void;
  selectedIndex?: number;
  // selectedItem?: T | null;
  // updateSelectedItem?: (item: T) => void;
  dropdownRef?: RefObject<HTMLElement>;
  getAriaAttributes?: () => {
    role: string;
    "aria-expanded": boolean;
    "aria-activedescendant": string | undefined;
  };
}


