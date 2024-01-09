
import type { RefObject } from "react";
import { createContext, useContext } from "react";

export interface DropdownProps<T> {
    isOpen: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    toggleDropdown?: () => void;
    selectedIndex?: number;
    selectedItem?: T | null;
    updateSelectedItem?: (item: T) => void;
    dropdownRef?: RefObject<HTMLElement>;
    getAriaAttributes?: () => {
      role: string;
      "aria-expanded": boolean;
      "aria-activedescendant": string | undefined;
    };
}

function createDropdownContext<T>() {
  return createContext<DropdownProps<T> | null>(null);
}

export const DropdownContext = createDropdownContext();

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Components must be used within a <Dropdown/>");
  }
  return context;
};



