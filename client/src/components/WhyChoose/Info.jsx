import data from "../../data.json";
import "./Info.css";

const Info = () => {
  return (
    <>
      <section className="se-containerNosotros">
        <h1>Why Choose Us?</h1>
        <article className="ar-cardNosotros">
          {data.nosotros.map((info) => (
            <div key={info.id} className="di-nosotrosInfo">
              <div>
                <img src={info.src} alt="icon" />
              </div>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default Info;
