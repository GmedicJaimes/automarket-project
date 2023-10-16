const Buttons = () => {
  return (
    <>
      <button className="buttons-whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=573142924255&text=Hola, estoy interesado en comprar un auto."
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"
            alt=""
          />
          Whatsapp
        </a>
      </button>
      <button className="buttons-instagram">
        <a href="https://www.instagram.com/automarketcucuta/" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
            alt=""
          />
          Instagram
        </a>
      </button>
    </>
  );
};

export default Buttons;
