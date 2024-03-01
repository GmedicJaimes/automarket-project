import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const Cards = ({ datos }) => {
  const [total, setTotal] = useState(datos.vehiculos);

  useEffect(() => {
    setTotal(datos.vehiculos);
  }, [datos.vehiculos]);

  console.log(total);

  return (
    <>
      <h1>
        La cantidad total de autos en nuestro catalogo es de {total.length}
      </h1>
      <Card props={datos} />
    </>
  );
};

export default Cards;
