import React from "react";
import { useParams } from "react-router";
import DatosElemento from "./DatosElemento.jsx";
import Carta from "../Carta.jsx";
import ElementoTabla from "./ElementoTabla.jsx";

const StarShip_Vehicle = ({ objeto }) => {
  const { categoria, id } = useParams();
  console.log(objeto);
  return (
    <div className="container-fluid p-3  texto">
      <div className="row">
        <div className="col-4 row align-content-center mx-3">
          <div className="col-6">
            {" "}
            <Carta
              url={
                id == 2 || id == 3 || id == 17 || id == 32 || id > 48
                  ? "https://www.historylatam.com/sites/default/files/styles/facebook_card_1200x630/public/images/2023/08/11/Pregunta%20espacial.jpg"
                  : `https://starwars-visualguide.com/assets/img/${categoria.toLowerCase()}s/${id}.jpg`
              }
              categoria={categoria}
              individual={true}
            />
          </div>
          <div className="col-6 align-content-center text-center">
            <h2 className="luz">{categoria}</h2>
          </div>
        </div>
        <div className="col-3 contenedor_pelicula scroll mx-3">
          <div className="col-12 d-flex flex-column text-end ">
            <p className="text-center texto luz fs-2">Pilots</p>
            <div className="rounded-3">
              {objeto.pilotos.length === 0 ? (
                <p className="texto luz text-center">here are no pilots :(</p>
              ) : (
                objeto.pilotos.map((elem) => {
                  return <ElementoTabla nombre={elem} />;
                })
              )}
            </div>
          </div>
        </div>
        <div className="col-4 contenedor_pelicula rounded-2 p-3 text-center scroll bg-white mx-3">
          <span className="fs-3 mx-2 fw-bold text-black py-3">Data</span>
          <DatosElemento nombre="Name" propiedad={objeto.name} />
          <DatosElemento nombre="Class" propiedad={objeto.class} />
          <DatosElemento nombre="Model" propiedad={objeto.modelo} />
          <DatosElemento nombre="Manu Facturer" propiedad={objeto.creador} />
          <DatosElemento nombre="Max speed" propiedad={objeto.max_speed} />
          <DatosElemento nombre="HyperDrive" propiedad={objeto.hyperdrive} />
          <DatosElemento nombre="Cost" propiedad={objeto.cost} />
          <DatosElemento nombre="Crew" propiedad={objeto.crew} />
          <DatosElemento nombre="Length" propiedad={objeto.largo} />
          <DatosElemento nombre="Consumables" propiedad={objeto.consumables} />
          <DatosElemento nombre="Capacity" propiedad={objeto.capacidad} />
          <DatosElemento nombre="Passangers" propiedad={objeto.pasajeros} />
        </div>
      </div>
    </div>
  );
};

export default StarShip_Vehicle;
