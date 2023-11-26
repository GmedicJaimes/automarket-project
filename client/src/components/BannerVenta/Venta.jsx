const Venta = () => {
  return (
    <>
      <div className="containerVenta">
        <section className="venta-infoPrincipal">
          <article className="ar-leftInfo">
            <div>
              <h1>Compramos tu carro en menos de 24hrs</h1>
              <p>
                Conoce las ofertas disponibles para que puedas vender tu
                seminuevo el mismo día
              </p>
              <button>
                <a
                  href="https://api.whatsapp.com/send?phone=573142924255&text=Hola, estoy interesado en comprar un auto."
                  target="_blank"
                >
                  Conecta con un asesor
                </a>
              </button>
            </div>
          </article>
          <article className="ar-rigthInfo">
            <div className="venta-card__ofertas">
              <h3>Oferta</h3>
              <h2>Inmediata</h2>
              <p>
                Entregas tu carro y recibes el pago directamente en tu cuenta.
              </p>
            </div>
            <div className="venta-card__ofertas">
              <h3>Oferta</h3>
              <h2>Intercambio</h2>
              <p>
                Entregas tu carro y te llevas un AutoMarket abonando solo la
                diferencia.
              </p>
            </div>
            <div className="venta-card__ofertas">
              <h3>Oferta</h3>
              <h2>Consigna</h2>
              <p>
                Dejas tu carro en AutoMarket y recibes el pago en tu cuenta un
                día después de su venta.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Venta;
