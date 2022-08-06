import React from "react";
import Grid from "@material-ui/core/Grid";

const About = (props) => {
  return (
    <div class="fullscreen background">
      <Grid container spacing={3}>
        <Grid
          item
          sm={12}
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img
            draggable="false"
            class="aboutImage"
            src="profileIcon.jpg"
            alt="Carota"
          />

          <div>
            <div class="aboutHeading">Acerca de mi</div>
            <br />

            <div align="center" class="aboutText">
              Que tal Soy Emanuel Carrillo un estudiante de ingenieria en
              sistemas
            </div>
            <div align="center" class="aboutText paddingTop">
              Trato de aprender todo lo que pueda
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
