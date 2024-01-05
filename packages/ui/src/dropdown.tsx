import type { ReactNode } from 'react';
import React from 'react';
import type { DropdownProps } from "./hooks/useToggle";
import useDropdown from "./hooks/useToggle";

interface TriggerProps {
  children: (params: { 
    toggleDropdown: DropdownProps['toggleDropdown'],
    isOpen: DropdownProps['isOpen'],
  }) => ReactNode; 
}

const Trigger: React.FC<TriggerProps> = ({ children }) => {
  const { toggleDropdown ,isOpen} = useDropdown();
  return children({ toggleDropdown, isOpen});
};


export function Dropdown() : JSX.Element{
  return (
    <div className="dropdown">
      <Trigger>
          {({ toggleDropdown, isOpen }) => {
            return (
              <button  className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
              onClick={toggleDropdown} tabIndex={0} type="button">
               <span className="selection">button {isOpen ? 'true' : 'false'}</span>
             </button>
            );
          }}
      </Trigger>
    </div>
  );
}