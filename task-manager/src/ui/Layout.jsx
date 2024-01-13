import Hero from "./Hero";
import Main from "./Main";

export default function Layout() {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
}

const states = [];
let index = 0;

const useState = function (initialValue) {
  let pair = states[index];

  if (pair) {
    index++;
    return pair;
  }

  function setState(newValue) {
    pair[0] = newValue;
    return pair;
  }
  pair = [initialValue, setState];

  states[index] = pair;
  index++;
  return pair;
};
