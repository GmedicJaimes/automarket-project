import "./UbicationContact.css";

const UbicationContact = () => {
  return (
    <>
      <article className="article-form">
        <div className="artForm-title">
          <h2>Find us also at our point of sale.</h2>
          <h3>
            We are located at the address: 100 The Quays, Salford M50 3BE -
            United Kingdom
          </h3>
        </div>
        <article className="ubication">
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9497.922516528224!2d-2.2956568271597932!3d53.477741617432365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6b108882d7%3A0xd7764310090d30cd!2sN%20V%20Bldg%2C%20100%20The%20Quays%2C%20Salford%20M50%203BE%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sco!4v1705371083345!5m2!1ses-419!2sco"
            loading="lazy"
          ></iframe>
        </article>
      </article>
    </>
  );
};

export default UbicationContact;
