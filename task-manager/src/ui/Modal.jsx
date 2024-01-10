import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens, render }) {
  const { open } = useContext(ModalContext);

  function handleClick() {
    open((cur) => (cur === opens || cur !== "" ? "" : opens));
  }

  return render({ onClick: handleClick });
}

function Window({ windowName, render }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    },
    [close]
  );

  if (windowName !== openName) return null;

  console.log(openName);

  return createPortal(
    <div className="fixed inset-0 z-850 w-screen">
      <div
        ref={ref}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1000 w-[75%] h-[550px]"
      >
        <button
          className="absolute top-0 right-6 bg-slate-50 text-2xl w-8 h-8 flex justify-center items-center text-slate-900 border-none outline-none hover:bg-slate-300 leading-none"
          onClick={close}
        >
          &times;
        </button>
        <div>{render({ onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
