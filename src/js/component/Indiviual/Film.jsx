import React, { useState } from "react";
import { useParams } from "react-router";
import DatosElemento from "./DatosElemento.jsx";
import Carta from "../Carta.jsx";
import ElementoTabla from "./ElementoTabla.jsx";

const Film = ({ objeto }) => {
  const { categoria, id } = useParams();
  const [btn, setBtn] = useState("personaje");
  const [tabla, setTabla] = useState(objeto.characters);

  return (
    <div className="container-fluid my-3 texto">
      <div className="row">
        <div className="col-4 row h-50">
          <div className="col-6">
            {" "}
            <Carta
              url={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
              categoria={categoria}
              individual={true}
            />
          </div>
          <div className="col-6 align-content-center text-center">
            <h2 className="luz">{categoria}</h2>
          </div>
          <div className="mt-3">
            <div className="col-12 text-center py-1">
              <h3 className=" luz">Aperture Text</h3>
            </div>
            <div className="col-12 py-1 text-center">
              <p className=" px-3">{objeto.texto_apertura}</p>
            </div>
          </div>
        </div>
        <div className="col-4 contenedor_pelicula rounded-2 p-3 text-center scroll">
          <span className="fs-3 mx-2 texto py-3">Data</span>
          <DatosElemento nombre="Title" propiedad={objeto.title} />
          <DatosElemento nombre="Director" propiedad={objeto.director} />
          <DatosElemento nombre="Producer" propiedad={objeto.productor} />
          <DatosElemento
            nombre="Realesa Date"
            propiedad={objeto.fecha_salida}
          />
        </div>
        <div className="col-4">
          <div className="col-12 d-flex flex-column text-end">
            <div className="d-flex border-bottom border-2">
              <button
                className={
                  btn === "personaje"
                    ? "btn rounded-0 texto luz btn_film mx-1 borde-luz border border-2 border-bottom-0"
                    : "btn  rounded-0 texto btn_film mx-1"
                }
                onClick={() => {
                  setBtn("personaje");
                  setTabla(objeto.characters);
                }}
              >
                Characters
              </button>
              <button
                className={
                  btn === "planeta"
                    ? "btn rounded-0 texto luz btn_film mx-1 borde-luz border border-2 border-bottom-0"
                    : "btn  rounded-0 texto btn_film mx-1"
                }
                onClick={() => {
                  setBtn("planeta");
                  setTabla(objeto.planetas);
                }}
              >
                Planets
              </button>
              <button
                className={
                  btn === "especies"
                    ? "btn rounded-0 texto luz btn_film mx-1 borde-luz border border-2 border-bottom-0"
                    : "btn  rounded-0 texto btn_film mx-1"
                }
                onClick={() => {
                  setBtn("especies");
                  setTabla(objeto.especies);
                }}
              >
                Species
              </button>
              <button
                className={
                  btn === "naves"
                    ? "btn rounded-0 texto luz btn_film mx-1 borde-luz border border-2 border-bottom-0"
                    : "btn  rounded-0 texto btn_film mx-1"
                }
                onClick={() => {
                  setBtn("naves");
                  setTabla(objeto.naves);
                }}
              >
                Naves
              </button>
              <button
                className={
                  btn === "vehiculos"
                    ? "btn rounded-0 texto luz btn_film mx-1 borde-luz border border-2 border-bottom-0"
                    : "btn  rounded-0 texto btn_film mx-1"
                }
                onClick={() => {
                  setBtn("vehiculos");
                  setTabla(objeto.vehiculos);
                }}
              >
                Vehiculo
              </button>
            </div>
            <div className="contenedor_pelicula rounded-3 scroll">
              {tabla.map((elem) => {
                return <ElementoTabla nombre={elem} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
