import data from "../data.json";

const Card = () => {
  return (
    <>
      <section>
        <h1>Vehiculos del Mes</h1>
        {data.vehiculos.map((info) => (
          <article key={info.id}>
            <img src={info.src} alt="" />
            <div>
              <h1>{info.marca}</h1>
              <h3>{info.tipo}</h3>
              <span> $ {info.precio} COP</span>
              <div>
                <p>{info.año}</p>
                <p>{info.kilometraje}</p>
              </div>
            </div>
          </article>
        ))}
        <a href="#">
          <button>Comunicate con un Asesor</button>
        </a>
      </section>
    </>
  );
};

export default Card;
