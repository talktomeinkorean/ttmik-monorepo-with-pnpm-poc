interface CheckboxProps {
    label: string
    isChecked: boolean
    onChange: () => void
  }
  
  function Checkbox({ label, isChecked, onChange }: CheckboxProps) {
    return (
      <label>
        <input checked={isChecked} onChange={onChange} type="checkbox" />
        <span>{label}</span>
      </label>
    )
  }
  
  export default Checkbox