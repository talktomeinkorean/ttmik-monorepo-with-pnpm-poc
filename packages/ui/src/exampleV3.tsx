
import { Dropdown } from "./dropdownV3/dropdown";


function exampleV3() {
  const items = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" },
    { text: "Item 4" },
  ];

  return (
    <Dropdown items={items}>
      <Dropdown.Trigger
        className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
        >
        <span>Click me to open the dropdown</span>
      </Dropdown.Trigger>
      <Dropdown.List>
        {items.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
}

export default exampleV3;