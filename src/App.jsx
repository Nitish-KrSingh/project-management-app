import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectSate] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddtask(text) {
    setProjectSate((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectSate((prevstate) => {
      return {
        ...prevstate,
        tasks: prevstate.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartaddProject() {
    setProjectSate((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectSate((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: undefined,
      };
    });
  }

  function handleaddProject(proejctData) {
    setProjectSate((prevState) => {
      const newProject = {
        ...proejctData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectSate((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectSate((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: undefined,
        projects: prevstate.projects.filter(
          (project) => project.id !== prevstate.selectedProjectId
        ),
      };
    });
  }
  const selectedP = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  console.log(selectedP);
  let content = (
    <SelectedProject
      project={selectedP}
      onDelete={handleDeleteProject}
      onAddTask={handleAddtask}
      ondeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleaddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.selectedProjectId == undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartaddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar
        onStartAddProject={handleStartaddProject}
        Allprojects={projectState.projects}
        selectedProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
