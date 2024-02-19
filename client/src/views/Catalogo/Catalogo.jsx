import Card from "../../components/Cards/Card";
import BannerVenta from "../../components/BannerVenta/Venta";

const Catalogo = () => {
  return (
    <>
      <section>
        <article className="title-services">
          <h1>Autos usados o nuevos</h1>
          <span>
            Encuentra el auto usado o nuevo que más se adapte a tus necesidades.
          </span>
        </article>
        <Card />
      </section>
      <BannerVenta />
    </>
  );
};

export default Catalogo;
