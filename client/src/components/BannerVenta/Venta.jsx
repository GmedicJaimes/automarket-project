import "./Venta.css";

const BannerVenta = () => {
  return (
    <>
      <div className="containerVenta">
        <section className="venta-infoPrincipal">
          <article className="ar-leftInfo">
            <div>
              <h1>We buy your car in less than 24 hours</h1>
              <p>
                Find out about the offers available so you can sell your
                pre-owned the same day.
              </p>
              <button>
                <a
                  href="https://api.whatsapp.com/send?phone=442051294591&text=Hello, I am interested in buying a car."
                  target="_blank"
                >
                  Connect with an advisor
                </a>
              </button>
            </div>
          </article>
          <article className="ar-rigthInfo">
            <div className="venta-card__ofertas">
              <h3>Offer</h3>
              <h2>Immediate</h2>
              <p>
                You deliver your car and receive payment directly into your
                account.
              </p>
            </div>
            <div className="venta-card__ofertas">
              <h3>Offer</h3>
              <h2>Exchange</h2>
              <p>
                You deliver your car and get an AutoMarket paying only the
                difference.
              </p>
            </div>
            <div className="venta-card__ofertas">
              <h3>Offer</h3>
              <h2>Consignment</h2>
              <p>
                You leave your car at AutoMarket and receive the payment in your
                account a day after its sale.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default BannerVenta;
