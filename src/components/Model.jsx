import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

const Model = forwardRef(function Model({ children , buttonCaption }, ref) {
const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });
  return createPortal(
    <dialog ref={dialog}  className="backdrop::bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog">
        <button className="px-4 py-2 md:text-xs rounded-md bg-indigo-700 text-indigo-300 hover:bg-indigo-600 hover:text-indigo-100">{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Model;
