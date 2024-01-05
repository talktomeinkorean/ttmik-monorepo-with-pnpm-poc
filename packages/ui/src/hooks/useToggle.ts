import { useState } from "react";

export interface Item {
  id : string;
  icon: string;
  text: string;
  description: string;
}

export interface DropdownProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggleDropdown: () => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    selectedItem: Item | null;
    setSelectedItem: (item: Item | null) => void;
    getAriaAttributes: () => {
      role: string;
      "aria-expanded": boolean;
      "aria-activedescendant": string | undefined;
    };
}

const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
   
    // helper function can return some aria attribute for UI
    const getAriaAttributes = () => ({
      role: "combobox",
      "aria-expanded": isOpen,
      "aria-activedescendant": selectedItem ? selectedItem.text : undefined,
    });
  
    const handleKeyDown = (e: React.KeyboardEvent) : void => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setIsOpen(true);
        }
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };
    
    const toggleDropdown = ():void => {
      setIsOpen(!isOpen);
    }
  
    return {
      isOpen,
      setIsOpen,
      
      toggleDropdown,
      handleKeyDown,
      selectedItem,
      setSelectedItem,
      getAriaAttributes,
    };
};
  
export default useDropdown;