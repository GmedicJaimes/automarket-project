import Card from "../components/Card";
import Info from "../components/Info";

const Home = () => {
  return (
    <>
      <section className="se-homeTitle">
        <div className="se-containerTitle__Info">
          <div className="se-infoHome">
            <h1>
              Quieres comprar tu primer <span>Auto</span> <br /> ¿Y no sabes
              donde hacerlo?
            </h1>
            <p>
              Encuentralo aqui con nosotros, en AutoMarket conseguiras el carro
              de tus sueños
            </p>
          </div>

          <a href="#info">
            <button>Saber mas</button>
          </a>
        </div>
      </section>
      <section id="info">
        <Info />
      </section>
    </>
  );
};

export default Home;