import { useState } from "react";
import Checkbox from "./checkbox";

export default function CheckboxOriginal() {
    const [isChecked, setIsChecked] = useState(false)
    return (
      <Checkbox
        isChecked={isChecked}
        label="original"
        onChange={() => { setIsChecked(!isChecked); }}
      />
    )
  }