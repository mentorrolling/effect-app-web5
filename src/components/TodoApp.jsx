import React, { useState } from "react";
import ToDoListApp from "./ToDoListApp";

const TodoApp = () => {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const submitInput = (e) => {
    e.preventDefault();

    setTareas([...tareas, inputValue]);
    setInputValue("");
  };

  const borrarTarea = (index) => {
    const tareasNew = [...tareas];
    tareasNew.splice(index, 1);
    setTareas(tareasNew);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Lista de Tareas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={submitInput}>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <ToDoListApp tareas={tareas} borrarTarea={borrarTarea} />
    </div>
  );
};

export default TodoApp;
