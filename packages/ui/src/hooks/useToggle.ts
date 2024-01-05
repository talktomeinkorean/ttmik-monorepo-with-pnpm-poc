import { useState } from "react";
import type { Item } from "../dropdown";

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