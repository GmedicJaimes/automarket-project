import React, { useEffect } from "react";
import Info from "../../components/WhyChoose/Info";
import Necesidad from "../../components/Necesidades/Necesidad";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section>
        <section className="se-homeTitle">
          <div className="se-containerTitle__Info">
            <div className="se-infoHome">
              <h1>
                Welcome to <span>Auto</span>Motors
              </h1>
              <p>#We make your dreams come true.</p>
              <button>
                <Link to={"/car-shop"}>Visit our shop </Link>
              </button>
            </div>
          </div>
        </section>
      </section>
      <section>
        <Necesidad />
      </section>
      <section>
        <Info />
      </section>
    </>
  );
};

export default Home;
