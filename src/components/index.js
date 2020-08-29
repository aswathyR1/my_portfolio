import React from "react";
import NavBar from "./navbar";
import Header from "./header";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Particles
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: false,
                value_area: 900,
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                  color: "tomato",
                },
                size: {
                  value: 8,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 8,
                    size_min: 0.1,
                    sync: true,
                  },
                },
              },
            },
          },
        }}
      />
    </>
  );
};

export default Home;