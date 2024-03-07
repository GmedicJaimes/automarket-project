import "./Card.css";

const Card = ({ props, total }) => {
  return (
    <>
      <section className="se-container__Autos">
        <h1>Vehicles of the month</h1>
        <div>
          <p>Total vehicles Available: {total.length}</p>
        </div>
        <div className="autosContenedor">
          {props.vehiculos.map((info) => (
            <article key={info.id} className="card-autos">
              <img src={info.src} alt="carros" loading="lazy" />
              <div className="card-containerInfo">
                <h2>{info.marca}</h2>
                <h3>{info.tipo}</h3>
                <div className="info-numeros">
                  <p>{info.año}</p>
                  <p>{info.kilometraje}</p>
                </div>
                <span> £ {info.precio} </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
