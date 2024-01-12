import CheckboxCompoundComponent from "./checkbox/compoundComponent/page";
import CheckboxCustomHooks from "./checkbox/customHooks/page";
import CheckboxfunctionAsChild from "./checkbox/functionAsChild/page";
import CheckboxOriginal from "./checkbox/original/page";


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
  {/*     
    <ExampleNpm/>
    <ExampleV2/>
    <ExampleV3/> */}
  </div>
  );
}
