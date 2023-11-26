import data from "../../data.json";

const Card = () => {
  return (
    <>
      <section className="se-container__Autos">
        <h1>Vehiculos del Mes</h1>
        <div className="autosContenedor">
          {data.vehiculos.map((info) => (
            <article key={info.id} className="card-autos">
              <img src={info.src} alt="carros" loading="lazy" />
              <div className="card-containerInfo">
                <h2>{info.marca}</h2>
                <h3>{info.tipo}</h3>
                <div className="info-numeros">
                  <p>{info.año}</p>
                  <p>{info.kilometraje}</p>
                </div>
                <span> $ {info.precio} </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
