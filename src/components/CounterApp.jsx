import React from "react";
import { useState, useEffect } from "react";
const CounterApp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCount(count + 1);
      console.log(count);
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, [count]);

  //montar componente
  useEffect(() => {
    //acciones cuando se monta (nace)
  }, []);

  //actualizarcomponente
  useEffect(() => {
    //acciones cuando actualiza el estado que está en el array
  }, [count]);

  useEffect(() => {
    return () => {
      //acciones cuando se desmonta o desaparece el componente
    };
  }, []);

  return <h1>{count}</h1>;
};

export default CounterApp;
