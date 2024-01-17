import * as React from 'react'

interface CheckboxContextProps {
    id: string
    isChecked: boolean
    onChange: () => void
}

type CheckboxProps = CheckboxContextProps & React.PropsWithChildren<object>


function createCheckboxContext() {
    return React.createContext<CheckboxContextProps | null>(null);
}
  
export const CheckboxContext = createCheckboxContext();
  
  
export const useCheckboxContext = () => {
const context = React.useContext(CheckboxContext);
if (!context) {
    throw new Error("Components must be used within a <Dropdown/>");
}
return context;
};

function CheckboxWrapper({
    id,
    isChecked,
    onChange,
    children,
  }: CheckboxProps) {
    const value = {
      id,
      isChecked,
      onChange,
    }
    return (
      <CheckboxContext.Provider value={value}>
        {children}
      </CheckboxContext.Provider>
    )
  }


  function Checkbox({ ...props }) {
    const { id, isChecked, onChange } = useCheckboxContext();
    return (
      <input
        checked={isChecked}
        id={id}
        onChange={onChange}
        type="checkbox"
        {...props}
      />
    )
  }
  
  function Label({ children, ...props }: React.PropsWithChildren<object> & React.LabelHTMLAttributes<HTMLLabelElement>) {
    const { id } = useCheckboxContext()
    return (
      <label htmlFor={id} {...props}>
        {children}
      </label>
    )
  }
  
  CheckboxWrapper.Checkbox = Checkbox;
  CheckboxWrapper.Label = Label;
  
  export default CheckboxWrapper;