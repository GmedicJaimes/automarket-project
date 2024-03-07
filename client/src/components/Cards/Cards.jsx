import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Cards.css";

const Cards = ({ datos }) => {
  //* Creacion de estado para manejo del total de vehiculos
  const [total, setTotal] = useState(datos.vehiculos);

  //* funcion para actualizar el estado, cada vez que cambie la cantidad de carros existentes
  useEffect(() => {
    setTotal(datos.vehiculos);
  }, [datos.vehiculos]);

  console.log(total);

  return (
    <>
      {/* <h1>Total cars Available: {total.length}</h1> */}
      <Card props={datos} total={total} />
    </>
  );
};

export default Cards;
