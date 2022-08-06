import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div id="Homepage">
      <div class="fullscreen background">
        <div className="leftsideHome">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
          >
            <div class="title">Bienvenido a mi pagina!</div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <div class="subtitle">
              <span class="subtitle subtitle-bold">
                Parcial I - Desarrollo Web
              </span>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
            data-aos-delay="600"
          >
            <Link
              to="/about"
              class="btn bigButton purple buttonLink"
              role="button"
            >
              Lets start the show
            </Link>
          </div>
        </div>

        <img
          draggable="false"
          className="coverImg"
          src="coverImg.png"
          alt="Luffy"
          data-aos="fade-zoom-in"
          data-aos-duration="2500"
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
        ></img>
      </div>
    </div>
  );
};

export default Home;
