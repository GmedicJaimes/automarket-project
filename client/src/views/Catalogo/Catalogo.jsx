import Cards from "../../components/Cards/Cards";
import BannerVenta from "../../components/BannerVenta/Venta";
import data from "../../data.json";

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
        <Cards datos={data} />
      </section>
      <BannerVenta />
    </>
  );
};

export default Catalogo;
