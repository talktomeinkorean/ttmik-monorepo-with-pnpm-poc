
import { useRef, type RefObject } from "react";
import { DropdownContext, useDropdownContext } from "./dropdownContext";
import useDropdown from "./useDropdown";

export function Dropdown<T extends { text: string }>({ 
  children, 
  // items, 
}: { 
  children: React.ReactNode; 
  items: T[]; 
}) { 
  const { 
   isOpen,getAriaAttributes,toggleDropdown
  } = useDropdown (); 

  const dropdownRef = useRef(null);
  return ( 
    <DropdownContext.Provider 
      value={{ 
        isOpen, 
        toggleDropdown,
      }} 
    > 
      <div 
        ref={dropdownRef as RefObject<HTMLDivElement>} 
        {...getAriaAttributes()} 
      > 
        {children} 
      </div > 
    </DropdownContext.Provider> 
  ); 
}

Dropdown.Trigger = function Trigger({
  as: Component = "button",
  children,
  className,
  ...props
} : {
  as? : React.ElementType;
  className?: string;
  children: React.ReactNode;
}) {
  const { toggleDropdown } = useDropdownContext();

  return <Component onClick={toggleDropdown} type="button" {...props} className={className}>
    {children}
    </Component>;
};


Dropdown.List = function List({
  as: Component = "ul",
  children,
  className,
  ...props
} : {
  as? : React.ElementType;
  className?: string;
  children: React.ReactNode;
}) {
  const { isOpen } = useDropdownContext();

  return isOpen ? <Component {...props} className={className} role="listbox" tabIndex={0}>
    {children}
  </Component> : null;
};


Dropdown.Item = function Item({
  as: Component = "li",
  index,
  className,
  item,
  ...props
} : {
  as? : React.ElementType;
  index: number;
  item: { text: string };
  children: React.ReactNode;
  className?: string;
}) {
  const { selectedIndex } = useDropdownContext();

  return (
    <Component
      aria-selected={index === selectedIndex}
      key={index}
      role="option"
      {...props}
      className={className}
    >
      {item.text}
    </Component>
  );
};



