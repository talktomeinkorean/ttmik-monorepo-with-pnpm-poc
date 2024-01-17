import { useState } from "react";
import CheckboxWrapper from "./checkbox";

export default function CheckboxCompoundComponent() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <CheckboxWrapper
      id="checkbox-1"
      isChecked={isChecked}
      onChange={() => { setIsChecked(!isChecked); }}
    >
      <CheckboxWrapper.Checkbox />
      <CheckboxWrapper.Label>compoundComponent</CheckboxWrapper.Label>
    </CheckboxWrapper>
  )
}