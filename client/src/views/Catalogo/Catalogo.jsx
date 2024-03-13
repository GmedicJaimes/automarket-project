import Cards from "../../components/Cards/Cards";
import BannerVenta from "../../components/BannerVenta/Venta";
import data from "../../data.json";
import "./Catalogo.css";

const Catalogo = () => {
  return (
    <>
      <section className="section-data-cards">
        <Cards datos={data} />
      </section>
      <BannerVenta />
    </>
  );
};

export default Catalogo;
