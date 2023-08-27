## JS imports order

```jsx
// react imports (order within could be any)
import { useState } from "react";
// imports from node_modules (order within could be any)
import { Box } from "@chakra-ui/react";
// project imports (order within could be any)
import { ExampleComponent } from "@/components";
import { ExampleComponent } from "@UI";
import { exampleConfig } from "@/constants"
import { useExample } from "@/hooks";
import { getExample } from "@/helpers";
// asset imports (order within could be any)
import { ReactComponent as Icon } from "Assets/Images/Icons/Loadmore.svg";

```

## Component structure

```jsx

// we should have spaces between curly brackets {
 export const Component = ({ props }) => {
  // useState and useDataStore should be at the top

  const [isOpened, setIsOpened] = useState(false);
  // space between
  const [parameters] = useDataStore();

  // spaces when destructuring object
  const { a, ...rest } = obj;
  const { a, b } = obj;
 
  //Then come functions, separate group of functions from rest code with spaces
  const cb = useCallback(() => {});
  const fc2 = () => 2;
  const fc = () => {
    const var1 = 1;
    const var2 = 2;
    ...
  };

  // then useEffect, each useEffect separated with space
  useEffect(() => {
   // some code
  }, []);

 // then hooks without arguments, group of hooks separated with space from rest code
  useSomeCustomHook();

 // empty line before return
  return (
  // for default tags props are horizontal if 3 or less
    <div className="container" id="main">
      Hello world
      <button id="1" title="2" type="submit" />
      <label
        id="1"
        title="2"
        type="submit"
        htmlFor="input"
      />

      // for custom components if 1, otherwise its vertically placed
      <Component tag="1" />
      <Component
        a="1"
        b="2"
      />

      // if component has prop without value it must be placed to the bottom
      <Component
        a="1"
        b="2"
        isOpen
      />
    </div>
  );
};
