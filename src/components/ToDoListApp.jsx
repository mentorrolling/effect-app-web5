import React from "react";

const ToDoListApp = (props) => {
  const { tareas, borrarTarea } = props;
  return (
    <div className="row">
      <div className="col mt-3">
        {tareas.map((tarea, index) => (
          <div className="card mb-2" key={index}>
            <div className="card-body">
              <span>{tarea}</span>
              <button
                onClick={() => borrarTarea(index)}
                className="btn btn-danger"
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoListApp;
