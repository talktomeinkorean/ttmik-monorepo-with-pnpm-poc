import useDropdown from "./hooks/useToggle";

export interface Item {
  id : string;
  icon: string;
  text: string;
  description: string;
}

export interface DropdownProps {
  items: Item[];
}

function Trigger({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) : JSX.Element {
  return (
    <button  className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
     onClick={onClick} tabIndex={0} type="button">
      <span className="selection">{label}</span>
    </button>
  );
}


function DropdownMenu({
  items,
  onItemClick,
}: {
  items: Item[];
  onItemClick: (item: Item) => void;
})  : JSX.Element {
  return (
    <div className="dropdown-menu">
      {items.map((item) => (
        <div
          key={item.id}
        >
          <button className="item-container" 
            onClick={() => { onItemClick(item); }}
            type="button">
          dd
          </button>
          <img alt={item.text} src={item.icon} />
          <div className="details">
            <div>{item.text}</div>
            <small>{item.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
}



export function Dropdown({ items }: DropdownProps) : JSX.Element{
  
  const {
    isOpen,
    selectedItem,
    setIsOpen,
    setSelectedItem,
  } = useDropdown();

  return (
    <div className="dropdown">
      <Trigger
        label={selectedItem ? selectedItem.text : "Select an item..."}
        onClick={() => { setIsOpen(!isOpen); }}
      />
      {isOpen ? <DropdownMenu items={items} onItemClick={setSelectedItem} /> : null}
    </div>
  );
}