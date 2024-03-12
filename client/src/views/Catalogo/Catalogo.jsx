import Cards from "../../components/Cards/Cards";
import BannerVenta from "../../components/BannerVenta/Venta";
import data from "../../data.json";

const Catalogo = () => {
  return (
    <>
      <section>
        <Cards datos={data} />
      </section>
      <BannerVenta />
    </>
  );
};

export default Catalogo;
