import Checkbox from "./checkbox";

// Function as Child Component는 자식에 어떤 것이 들어올지 예상할 수 없기 때문에 children prop으로 받아 그대로 전달하는 것
export default function CheckboxfunctionAsChild() {
    return (
      <Checkbox>
      {({ isChecked, onChange }) => {
        return (
          <label>
            <input checked={isChecked} onChange={onChange} type="checkbox" />
            <span>functionAsChild</span>
          </label>
        )
      }}
    </Checkbox>
    )
  }