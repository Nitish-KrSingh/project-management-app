import React, { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

export default function NewProject({onAdd , onCancel}) {



const model  = useRef();
const title = useRef();
const Desription = useRef();
const duedate = useRef();




  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesription = Desription.current.value;
    const enteredduedate = duedate.current.value;

    // validation 
    if (enteredTitle.trim() === "" || enteredDesription.trim() === "" || enteredduedate.trim()  ==="") {
      model.current.open();
      return;
    }


    onAdd({
      title : enteredTitle,
      Desription : enteredDesription,
      duedate : enteredduedate
    });
  }


  return (
    <>
       <Model ref={model} buttonCaption="Okay">
          <h2 className="text-xl font-bold text-stone-500 my-4 "> Invalid Input</h2>
          <p className="text-xs  text-stone-500 my-4">Opps .. looks like you forgot to input some value.</p>
        </Model>

    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="px-4 py-2 md:text-xs rounded-md  hover:bg-indigo-600 hover:text-indigo-100"> 
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-4 py-2 md:text-xs rounded-md  bg-indigo-950 text-indigo-50 hover:bg-indigo-600 hover:text-indigo-100"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <p>
          <Input type="text"  ref={title} label="Title" />
          <Input ref={Desription} label="Decription" isTextarea />
          <Input type="date" ref={duedate} label="Due Date" />
        </p>
      </div>
    </div>
    </>
  );
}
