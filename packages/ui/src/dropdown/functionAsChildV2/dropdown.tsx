import { useState, type ReactNode } from "react";


interface DropdownProps {
  children: (params: { 
    toggleDropdown: () => void,
    isOpen: boolean,
  }) => ReactNode; 
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
 
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  return children({ toggleDropdown, isOpen});
};


export default Dropdown;


