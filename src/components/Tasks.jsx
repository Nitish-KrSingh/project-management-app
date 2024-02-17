import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && <p className="text-stone-800 mb-4 my-3">This Project does not have any task yet</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4"> <span>  {task.text}</span> 
            
            <button onClick={()=> onDelete(task.id)} className="px-4 py-2 md:text-xs rounded-md   hover:text-red-700">Delete</button></li>
          ))}
        </ul>
      )}
    </section>
  );
}
