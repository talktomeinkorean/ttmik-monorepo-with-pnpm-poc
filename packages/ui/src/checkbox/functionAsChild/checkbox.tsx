import { useState } from "react"

interface CheckboxProps {
  isChecked: boolean
  onChange: () => void
}
  

function Checkbox(props: {
  children: (args: CheckboxProps) => JSX.Element
}) {
  const [isChecked, setIsChecked] = useState(false)

  if (typeof props.children !== 'function') return null;

  return props.children({
    isChecked,
    onChange: () => { setIsChecked(!isChecked); },
  })
}
  
export default Checkbox;