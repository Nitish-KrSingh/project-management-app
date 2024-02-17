import React, { useState } from 'react'

export default function NewTask({onAdd , onDelete}) {


  const[enteredTask , setEnteredTask] = useState("");

  function handlechangeInput(event) {
    setEnteredTask(event.target.value);
  }


  function handleClick() {
    onAdd(enteredTask);
    setEnteredTask("");

  }

  return (
    <div className='flex item-center gap-4'>
        <input type="text" required onChange={handlechangeInput} value={enteredTask} className=' p-1 border-b-2 rounded-sm  border-stone-300 bg text-stone-600  bg-stone-200 focus:outline-none focus:border-stone-700' />
        <button  onClick={handleClick} className="px-4 py-2 md:text-xs rounded-md  hover:bg-indigo-600 hover:text-indigo-100">Add Task</button>
    </div>
  )
}
