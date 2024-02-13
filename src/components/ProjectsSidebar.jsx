import React from "react";
import Button from "./Button";

function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 text-stone-50 px-8 py-16 bg-stone-900 rounded-r-xl md:w-72">
      <h2 className="uppercase mb-8 font-bold md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-color-100"
          onClick={onStartAddProject}
        >
          + Add Project
        </Button>
      </div>
      {/* list of projects to be shown here */}
      <ul className="mt-8">
        {projects.map((project) => {
          let classes =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id == selectedProjectId) {
            // highlight the button
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={classes}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
