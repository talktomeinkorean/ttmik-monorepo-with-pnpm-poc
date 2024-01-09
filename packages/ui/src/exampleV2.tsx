import { DropdownList, DropdownTrigger } from "./dropdownV2/dropdown";


function exampleV2() {
  return (
    <div className="dropdown">
    <DropdownTrigger>
        {({ toggleDropdown, isOpen }) => {
          return (
            <button  className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
            onClick={toggleDropdown} tabIndex={0} type="button">
             <span className="selection">button {isOpen ? 'true' : 'false'}</span>
           </button>
          );
        }}
    </DropdownTrigger>
    <DropdownList>
    {({ isOpen }) => {
          return (
            <span className="selection">{isOpen ? 'true' : 'false'}</span>
          );
        }}
    </DropdownList>
  </div>
  );
}

export default exampleV2;