import React from "react";
import { Carousel } from "react-bootstrap";
import "./Aceuil.css";
const Aceuil = () => {
  return (
    <div>
      <h1> </h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="slide"
            src="https://images.psg.media/media/181657/hero-women-21-22.jpg?center=0.5,0.5&mode=crop&width=1600&height=800&quality=80"
            alt="F.FOOTBALL"
          />
          <Carousel.Caption>
            <h3>F.FOOTBALL</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide"
            src="https://images.psg.media/media/148084/hero-first-team-21-22-ter.jpg?center=0.5,0.5&mode=crop&width=1600&height=800&quality=80"
            alt="FOOTBALL"
          />

          <Carousel.Caption>
            <h3>FOOTBALL</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide"
            src="https://images.psg.media/media/195855/hero-handball-20-21-alt.jpg?center=0.5,0.5&mode=crop&width=1600&height=800&quality=80"
            alt="HANDBALL"
          />

          <Carousel.Caption>
            <h3>HANDBALL</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Aceuil;
