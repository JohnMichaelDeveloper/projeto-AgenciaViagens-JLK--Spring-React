import React, { useState } from "react";

import Destination1 from "assets/img/Destination1.png";
import Destination2 from "assets/img/Destination2.png";
import Destination3 from "assets/img/Destination3.png";
import Destination4 from "assets/img/Destination4.png";
import Destination5 from "assets/img/Destination5.png";
import Destination6 from "assets/img/Destination6.png";
import info1 from "assets/img/info1.png";
import info2 from "assets/img/info2.png";
import info3 from "assets/img/info3.png";
import "./styles.css";

export default function Pacotes() {
  const data = [
    {
      image: Destination1,
      title: "Santos - SP",
      subTitle: "Santos é um município portuário sede da Região Metropolitana da Baixada Santista, ",
      cost: "2.100",
      duration: "Aproximadamente 2 noites de viagem",
    },
    {
      image: Destination2,
      title: "Tailândia",
      subTitle: "A Tailândia é o país mais visitado de acordo com a Organização Mundial de Turismo.",
      cost: "5.200",
      duration: "Aproximadamente 2 noites de viagem",
    },
    {
      image: Destination3,
      title: "Portugal",
      subTitle: "Portugal, Portugal foi eleito pela Condé Nast Traveller o melhor destino do mundo.",
      cost: "5.500",
      duration: "Aproximadamente 2 noites de viagem",
    },
    {
      image: Destination4,
      title: "Natal - RN",
      subTitle: "Natal, É a capital do Rio Grande do Norte e uns dos melhores lugares do Brasil.",
      cost: "3,100",
      duration: "Aproximadamente 1 noites de viagem",
    },
    {
      image: Destination5,
      title: "Santa Catarina",
      subTitle: "Santa Catarina, Entre as melhores praias está a Balneário de Camburiú.",
      cost: "95,400",
      duration: "Aproximadamente 2 noites de viagem",
    },
    {
      image: Destination6,
      title: "Recife",
      subTitle: "Recife é um município brasileiro, capital do estado de Pernambuco",
      cost: "38,800",
      duration: "Aproximadamente 2 noites de viagem",
    },
  ];

  const packages = [
    "O fim de Semana ideal",
    "O pacote de férias pra toda familia",
    "A viagem dos sonhos",
    "Viagem tranquilas de Longo Prazo",
  ];

  const [active, setActive] = useState(1);
  return (
    <div className="container pacoteHome" id="pacote">
      <div className="title">
        <h2>Recomendações Para Você</h2>
      </div>
      <div className=" container packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img className="destino" src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img className="icones" src={info1} alt="" />
                  <img className="icones" src={info2} alt="" />
                  <img className="icones" src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



