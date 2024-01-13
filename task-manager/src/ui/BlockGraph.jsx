import { useEffect, useState } from "react";
import { ll } from "./data";

export default function BlockGraph() {
  const [obj, setObj] = useState(ll._head);
  console.log(obj);
  return (
    // <div>
    <Block obj={obj} onAdd={setObj} />
    // </div>
  );
}

function Block({ obj, onAdd, parent }) {
  console.log(obj);

  function handleClick(value) {
    console.log(value);
    // const newNode = { ...ll.getNode(value, Math.floor(Math.random() * 100)) };
    const newNode = { ...ll.getNode(value, Math.floor(Math.random() * 100)) };
    console.log(newNode);
    onAdd(newNode);
  }

  return (
    // <div className="flex gap-2 items-center bg-slate-500">
    <div className={`p-2 w-auto flex items-center gap-2`}>
      <h3 className="bg-pink-600">
        ID: {obj.value}, {parent?.value && `Parent ID: ${parent.value},`}{" "}
        Children: {obj.next?.length}
      </h3>
      <button className="bg-stone-100" onClick={() => handleClick(obj)}>
        +
      </button>

      <div className="bg-rose-500">
        {obj.next?.map((el) => (
          <Block key={el.value} obj={el} onAdd={onAdd} parent={obj} />
        ))}
      </div>
    </div>
    // {/* </div> */}
  );
}
