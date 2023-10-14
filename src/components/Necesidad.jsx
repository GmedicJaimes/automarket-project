import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";

const Necesidad = () => {
  return (
    <>
      <section className="se-containerNecesidad">
        <h2>Somos tu mejor opcion del mercado.</h2>
        <div className="necesidad-carrusel">
          <article className="cardNecesidad">
            <div>
              <h2>
                ¿Estas cansado de salir con tu familia y no tener un comfort al
                transportarse?{" "}
              </h2>
              <span>
                En Automarket podemos ayudarte a escoger la mejor opción que se
                adapte a tu necesidad.
              </span>
            </div>
            <img src={imagen1} alt="" />
          </article>
          <article className="cardNecesidad">
            <img src={imagen2} alt="" />
            <div>
              <h2>
                ¿Las altas temperaturas te estresan y fastidian al momento de
                movilizarte?
              </h2>
              <span>
                En Automarket contamos con buenos Autos que cuentan con un
                excelente sistema de aire acondicionado. Sobre todo estaras
                comodo cuando te estas transportando por la ciudad.
              </span>
            </div>
          </article>
          <article className="cardNecesidad">
            <h2>
              En Automarket estamos comprometidos a escuchar y cubrir lo que el
              cliente nos pida.
            </h2>
            <span>Somos tú mejor opción en la ciudad de Cúcuta.</span>
          </article>
        </div>
      </section>
    </>
  );
};

export default Necesidad;
