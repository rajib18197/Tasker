import { memo, useEffect, useRef, useState } from "react";

function Box({ count, onClick }) {
  const ref = useRef();

  useEffect(function () {
    ref.current.style.background = `rgb(${Math.trunc(
      Math.random() * 255
    )}, ${Math.trunc(Math.random() * 255)}, ${Math.trunc(
      Math.random() * 255
    )})`;
  }, []);

  function handleClick() {}

  return (
    <div
      className="w-full h-full"
      ref={ref}
      //   ref={(node) => {
      //     if (node) {
      //       node.style.background = `rgb(${Math.trunc(
      //         Math.random() * 255
      //       )}, ${Math.trunc(Math.random() * 255)}, ${Math.trunc(
      //         Math.random() * 255
      //       )})`;
      //     }
      //   }}
    >
      <div className="flex gap-1 items-center justify-center h-full">
        <button
          className="bg-stone-50 text-slate-600 leading-none p-2"
          onClick={() => {
            if (count === 1) {
              onClick();
            }
          }}
        >
          v
        </button>
        <button
          className="bg-stone-50 text-slate-600 leading-none p-2"
          //   onClick={() => handleClick("h")}
        >
          h
        </button>
      </div>
    </div>
  );
}

// export default memo(Box);
export default Box;
