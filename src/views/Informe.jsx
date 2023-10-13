const Informe = () => {
  return (
    <>
      <section className="se-informeContainer">
        <h1>Informe Parcial</h1>
        <article className="art-containerInfo">
          <div className="info-informe">
            <h2>Segmentación de mercado</h2>

            <p>Personas entre 25 a 48 años</p>
            <p>Hombres y Mujeres</p>
            <p>Rango salarial de 2 a 6 SMLV</p>
            <p>Area metropolitana de Cúcuta</p>
          </div>
          <div>
            <img
              src="https://taaf.es/wp-content/uploads/2022/10/segmentacion-honorarios.jpg"
              alt=""
            />
          </div>
        </article>
        <article className="art-containerInfo">
          <div>
            <img
              src="https://fundamentosdelmarketing.ar/wp-content/uploads/Necesidades-y-deseos-fundamentos-del-marketing-daniel-ariel-milano-1.png"
              alt=""
            />
          </div>
          <div className="info-informe">
            <h2>Necesidad y Dolor</h2>
            <p>
              Necesidad: Movilidad familiar y Comfort al momento de
              transportarse
            </p>
            <p>Dolor: Altas temperaturas de calor en la ciudad de Cúcuta</p>
          </div>
        </article>
        <article className="art-containerInfo">
          <div className="info-informe">
            <h2>Canales de distribucción</h2>
            <p>Fisico: Punto de venta</p>
            <p>
              Digital: Whatsapp, Pagina Web, Instagram, exhibicion o vitrinas
            </p>
          </div>
          <div>
            <img
              src="https://unade.edu.mx/wp-content/uploads/2021/02/tipos-de-canales-de-distribucion-estrategia.jpg"
              alt=""
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Informe;
