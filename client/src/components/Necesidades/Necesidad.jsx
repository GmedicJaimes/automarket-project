const Necesidad = () => {
  return (
    <>
      <section className="se-containerNecesidad">
        <h1 id="saber">Somos tu mejor opción del mercado.</h1>
        <div className="necesidad-carrusel">
          <article className="cardNecesidad">
            <div className="card-necesidad__info">
              <h2>
                ¿Estas cansado de salir con tu familia y no tener un comfort al
                transportarse?{" "}
              </h2>
              <span>
                En Automarket podemos ayudarte a escoger la mejor opción que se
                adapte a tu necesidad.
              </span>
            </div>
            <img
              src="https://www.motor.com.co/__export/1655175867501/sites/motor/img/2022/06/13/2024-chevrolet-blazer-ev-1_crop1655175866789.jpg_242310155.jpg"
              alt=""
              className="image1"
            />
          </article>
          <article className="cardNecesidad">
            <img
              src="https://www.elcarrocolombiano.com/wp-content/uploads/2020/08/20200813-CHEVROLET-ONIX-RS-TURBO-2021-PRUEBA-DE-MANEJO-VIDEO-01.jpg"
              alt=""
              className="image2"
            />
            <div className="card-necesidad__info">
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
              En AutoMarket estamos comprometidos a escuchar <br />y cumplir lo
              que el cliente necesite.
            </h2>
          </article>
        </div>
      </section>
    </>
  );
};

export default Necesidad;
