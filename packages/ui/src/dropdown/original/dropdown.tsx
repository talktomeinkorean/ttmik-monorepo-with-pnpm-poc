import type { RefObject } from "react";

interface Item {
  text: string;
}

interface DropDownProps {
  label: string;
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  toggleDropdown?: () => void;
  selectedIndex?: number;
  items: Item[];
  dropdownRef?: RefObject<HTMLElement>;
  getAriaAttributes?: () => {
    role: string;
    "aria-expanded": boolean;
    "aria-activedescendant": string | undefined;
  };
}

function Dropdown({ isOpen, toggleDropdown, label, items, getAriaAttributes }: DropDownProps) {
  const ariaAttributes = getAriaAttributes ? getAriaAttributes() : {};

  return (
    <div>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
        onClick={toggleDropdown}
        type="button"
        {...ariaAttributes}
        >
        {label}
      </button>
      {isOpen ? <ul>
          {items.map((item, index) => (
            <li id={`dropdown-item-${index}`} key={item.text}>
              {item.text}
            </li>
          ))}
        </ul> : null}
    </div>
  );
}

export default Dropdown;
