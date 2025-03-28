import React, { useState } from "react";
import CounterApp from "./components/CounterApp";
import FakeStoreApp from "./components/FakeStoreApp";

const App = () => {
  // useEffect(() => {
  //   //las acciones que se disparan con el useEffect
  // }, []); //arreglo de dependencias
  // const [show, setShow] = useState(true);

  return (
    // <div>
    //   <button onClick={() => setShow(false)}>ocultar</button>
    //   {show && <CounterApp />}
    // </div>
    <div className="bg-light">
      <FakeStoreApp />
    </div>
  );
};

export default App;
