import type React from 'react';
import type { ReactNode } from 'react';
import type { DropdownProps } from './dropdownContext';
import useDropdown from "./useDropDown";

interface DropdownTriggerProps {
  children: (params: { 
    toggleDropdown: DropdownProps['toggleDropdown'],
    isOpen: DropdownProps['isOpen'],
  }) => ReactNode; 
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children }) => {
  const { toggleDropdown ,isOpen} = useDropdown();
  return children({ toggleDropdown, isOpen});
};


interface DropdownListProps {
  children: (params: { 
    isOpen: DropdownProps['isOpen'],
  }) => ReactNode; 
}

export const DropdownList: React.FC<DropdownListProps> = ({ children }) => {
  const {isOpen} = useDropdown();
  return children({ isOpen });
};


