import Card from "../components/Card";
import Venta from "../components/Venta";

const Catalogo = () => {
  return (
    <>
      <section className="title-services">
        <h1>Autos usados o nuevos</h1>
        <span>
          Encuentra el auto usado o nuevo que más se adapte a tus necesidades.
        </span>
      </section>

      <Card />
      <Venta />
    </>
  );
};

export default Catalogo;
