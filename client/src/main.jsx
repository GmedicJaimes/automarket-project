import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";

//* creacion del componente con la prop que representa el contenido que va a renderizar
const Wrapper = ({ children }) => {
  //* obtengo la ubicacion actual de la aplicacion y la guardo en la variable location
  const location = useLocation();

  //* se ejecuta una funcion despues de actualizar el DOM, el cual me realiza un desplazamiento a la coordenada 0,0 de la parte superior cuando cambia la ubicacion de la aplicación
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  //* devuelvo el contenido recibido a traves del prop children.
  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Wrapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Wrapper>
  </BrowserRouter>
);
