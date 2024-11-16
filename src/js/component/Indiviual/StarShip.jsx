import React from "react";
import { useParams } from "react-router";
import DatosElemento from "./DatosElemento.jsx";
import Carta from "../Carta.jsx";

const StarShip = ({ objeto }) => {
  const { categoria, id } = useParams();

  let datos = {
    img: "https://starwars-visualguide.com/assets/img/starships/5.jpg",
    pilotos: "Pilotos",
    name: "datos.properties.name",
    id: " datos.uid",
    descripcion: "datos.description",
    pasajeros: "datos.properties.passengers",
    capacidad: "datos.properties.cargo_capacity",
    consumables: "datos.properties.consumables",
    cost: "datos.properties.cost_in_credits",
    crew: "datos.properties.crew",
    hyperdrive: "datos.properties.hyperdrive_rating",
    largo: "datos.properties.length",
    creador: "datos.properties.manufacturer",
    max_speed: "datos.properties.max_atmosphering_speed",
    modelo: "datos.properties.model",
    class: " datos.properties.starship_class",
  };

  return (
    <div className="container-fluid my-3  texto">
      <div className="row h-50">
        <div className="col-5 row">
          <div className="col-6">
            {" "}
            <Carta
              id={datos.id}
              nombre={datos.name}
              url={datos.img === undefined ? datos.url : datos.img}
              categoria={"specie"}
              individual={true}
            />
          </div>
          <div className="col-6 align-content-center text-center">
            <div className="col-6 align-content-center">
              <h2 className="luz">{categoria}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row  h-50"></div>
    </div>
  );
};

export default StarShip;
