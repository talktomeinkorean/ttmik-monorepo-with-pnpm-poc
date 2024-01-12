import CheckboxCompoundComponent from "./checkbox/compoundComponent/page";
import CheckboxCustomHooks from "./checkbox/customHooks/page";
import CheckboxfunctionAsChild from "./checkbox/functionAsChild/page";
import CheckboxOriginal from "./checkbox/original/page";
import DropdownCustomHooks from "./dropdown/customHooks/page";
import { DropdownNpm } from "./dropdown/npm/page";
import DropdownOriginal from "./dropdown/original/page";


export function Header(): JSX.Element {
  return (
  <div>
    {/* checkboxOriginal */}
    <CheckboxOriginal/>
    <br/>
    {/* checkboxCompoundComponent */}
    <CheckboxCompoundComponent/>
    <br/>
    {/* checkboxFunctionAsChild */}
    <CheckboxfunctionAsChild/>
    <br/>
     {/* checkboxCustomHooks */}
     <CheckboxCustomHooks/>
     <br/>

     <br/>
     <br/>

    {/* dropdownOriginal */}
    <DropdownOriginal/>

    {/* dropdownNpm */}
    <DropdownNpm/>
    <br/>
  
    {/* DropdownCustomHooks */}
    <DropdownCustomHooks/>
    <br/>



  </div>
  );
}
