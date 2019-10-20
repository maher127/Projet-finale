import React, { Component } from "react";
import "./carosel.css";
import Jardinage from "../../images/Canva - Bench in the garden.jpg";
import Peinture from "../../images/Canva - Person Holding Paintbrush.jpg";
import Batiment from "../../images/magasin-bricolage-medium.jpg";
import Demanage from "../../images/13921_ambiance.jpg";
import { Carousel } from "react-bootstrap";
export default class Carosel extends Component {
  render() {
    return (
      <div className="carosel">
        <Carousel controls={false} interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100 image-slide"
              src={Peinture}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 image-slide"
              src={Jardinage}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image-slide"
              src={Batiment}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image-slide"
              src={Demanage}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="presentation text-white text-center">
          <div className="container-titre ">
            <h1 className="title mb-3  big-title ">
              Des profesionnels pour vous aider
            </h1>
            <h2 className="title mt-3 text-center">
              Travaux, déménagement, livraison & services à domicile
            </h2>
          </div>
          <a href="#" className="btn  btn-success btn-lg button-carosel">
            De quel service vous avez bessoin ?
          </a>
        </div>
      </div>
    );
  }
}
