import React from "react";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  ondeleteTask,
  tasks,
}) {
  // const formatteddate = new Date(project.duedate).toLocaleDateString('en-US',{
  //     year : 'numeric',
  //     month : 'short',
  //     day : 'numeric',
  // });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 ">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="px-4 py-2 md:text-xs rounded-md  hover:bg-indigo-600 hover:text-indigo-100"
          >
            Delete
          </button>
        </div>
        <p className=" mb-4 text-xs  text-stone-500 my-4">{project.duedate}</p>
        <p className="whitespace-pre-warp text-stone-500 ">
          {project.Desription}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={ondeleteTask} tasks={tasks} />
    </div>
  );
}
