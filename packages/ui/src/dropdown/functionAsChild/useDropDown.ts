import { useState } from "react";

const useDropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    // const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
   
    // helper function can return some aria attribute for UI
    const getAriaAttributes = () => ({
      role: "combobox",
      "aria-expanded": isOpen,
      // "aria-activedescendant": selectedItem ? selectedItem.text : undefined,
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
      // setSelectedItem,
      getAriaAttributes,
    };
};
  
export default useDropdown;