import React, { forwardRef } from "react";

const claasses =
  "w-full p-1 border-b-2 rounded-sm  border-stone-300 bg text-stone-600  bg-stone-200 focus:outline-none focus:border-stone-700";

  // Replace the outer <p> with <div>
export default forwardRef(function Input({ isTextarea, label, ...props }, ref) {
  return (
    <>
    <div className="flex flex-col gap-1 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-600">
        {label}
      </label>
      {isTextarea ? (
        <textarea ref={ref} className={claasses} {...props} />
      ) : (
        <input ref={ref} {...props} className={claasses} />
      )}
    </div>
    </>
  );
});

