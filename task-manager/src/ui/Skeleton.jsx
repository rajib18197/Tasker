import { useEffect, useRef, useState } from "react";
import Box from "./Box";

export default function Spilit() {
  const [count, setCount] = useState(1);
  const [isVertical, setIsVertical] = useState(true);

  function handleClick(selectedScreen) {
    setCount((count) => count + 1);
    // if (selectedScreen === "v") {
    //   setIsVertical(true);
    // } else {
    //   setIsVertical(false);
    // }
  }

  return (
    <div className={`w-full h-screen gap-2 flex`}>
      {Array(count)
        .fill(0)
        .map((el, i) => (
          <Box key={i} count={count} onClick={handleClick} />
        ))}
      {/* <Box count={count} onClick={handleClick} /> */}
    </div>
  );
}

// we know react will create react elements on the initial render and give those to reactDom. My question is does react create dom elements from react elements in the render phase or ReactDom create dom elements from react elements in the commit phase?

// vai Principle of Least Privilege niye jodi kichu bolten and component design er somoy ata kivabe help korbe?.

// Just curious to know more about the mental models you and tapas vai personally use when deciding how to structure your react project and designing components, state management on everyday life.
