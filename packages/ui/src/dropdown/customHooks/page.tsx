import { useDropDown } from "./useDropDown";

export default function DropdownCustomHooks() {

  const items = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" },
    { text: "Item 4" },
  ]
  const { isOpen, toggleDropdown ,ariaAttributes} = useDropDown();
  return (
    <div>
      <button
        aria-haspopup="listbox"
        className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
        onClick={toggleDropdown}
        type="button"
        {...ariaAttributes}
        >
        dropdown custom hooks
      </button>
      {isOpen ? <ul>
          {items.map((item, index) => (
            <li id={`dropdown-item-${index}`} key={item.text}>
              {item.text}
            </li>
          ))}
        </ul> : null}
    </div>
  )
}