import { useState } from "react";
import Dropdown from "./dropdown";


export default function DropdownOriginal() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => { setIsOpen(!isOpen); };

    const items = [
      { text: "Item 1" },
      { text: "Item 2" },
      { text: "Item 3" },
      { text: "Item 4" },
    ]
    return (
      <Dropdown 
        isOpen={isOpen}
        items={items}
        label="original"
        toggleDropdown={toggleDropdown}
      />
    )
  }