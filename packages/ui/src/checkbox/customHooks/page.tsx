import { useCheckbox } from './useCheckbox';

export default function CheckboxCustomHooks() {
  const { isChecked, onChange } = useCheckbox();
  return (
    <label>
      <input checked={isChecked} onChange={onChange} type="checkbox" />
      <span>customHooks</span>
    </label>
  )
}