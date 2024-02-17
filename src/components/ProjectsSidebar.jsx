import React from "react";
import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  Allprojects,
  selectedProject,
  selectedId
}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-indigo-950 text-indigo-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-indigo-200">
          Your Projects
        </h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add new Project</Button>
        </div>
        <ul className="my-5">
          {Allprojects.map((element) => {
            let cssClasses = "w-full text-left px-2 py-1 px-1 rounded-sm my-1 text-indigo-300 hover:text-indigo-50 hover:bg-indigo-800";

            if (element.id === selectedId ) {
              cssClasses += "text-indigo-200  bg-indigo-800";
            }else{
              cssClasses += "text-indigo-400";

            }
            return (
              <li key={element.id}>
                <Button
                  onClick={() => selectedProject(element.id)}
                  className={cssClasses}
                >
                  {element.title}
                </Button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
