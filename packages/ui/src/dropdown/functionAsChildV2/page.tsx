import Dropdown from "./dropdown";

function DropdownfunctionAsChild() {

  const items = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" },
    { text: "Item 4" },
  ]

  return (
    <Dropdown>
      {({ toggleDropdown, isOpen }) => {
        return (
          <>
          <button  className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
            onClick={toggleDropdown} tabIndex={0} type="button">
            <span className="selection">DropdownfunctionAsChild</span>
          </button>
          {isOpen ? <ul>
          {items.map((item, index) => (
              <li id={`dropdown-item-${index}`} key={item.text}>
                {item.text}
              </li>
            ))}
          </ul> : null}
        </>
        )
      }}
    </Dropdown>
  );
}

export default DropdownfunctionAsChild;