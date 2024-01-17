import { Menu } from '@headlessui/react'

export function DropdownNpm() {

  const items = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" },
    { text: "Item 4" },
  ]
  return (
    <Menu>
      <Menu.Button
        className="ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
      >dropdown npm</Menu.Button>
      <Menu.Items>

      {items.map((item) => (
        <Menu.Item key={item.text}>
          {({ active }) => (
            <div
              className={`${
                active ? 'bg-blue-500 text-white' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {item.text}
            </div>
          )}
        </Menu.Item>
      ))}
      </Menu.Items>
    </Menu>
  )
}