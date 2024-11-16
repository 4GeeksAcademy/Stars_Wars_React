import React, { useState } from "react";
import { useParams } from "react-router";
import DatosElemento from "./DatosElemento.jsx";
import Carta from "../Carta.jsx";
import ElementoTabla from "./ElementoTabla.jsx";

const Film = ({ objeto }) => {
  let datos = {
    img: "https://starwars-visualguide.com/assets/img/films/5.jpg",
    characters: [
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
      "Personaje",
    ],
    planetas: "Planetas",
    especies: "Species",
    naves: "Starships",
    vehiculos: "Vehicles",
    title: "datos.properties.title",
    id: "datos.uid",
    descripcion: " datos.description",
    director: "datos.properties.director",
    texto_apertura: "datos.properties.opening_crawl",
    productor: " datos.properties.producer",
    fecha_salida: " datos.properties.release_date",
  };
  const { categoria, id } = useParams();
  const [btn, setBtn] = useState("personajes");
  const [tabla, setTabla] = useState(datos.characters);

  return (
    <div className="container-fluid my-3 texto">
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <div className="col-12 d-flex flex-column text-end">
            <div className="d-flex">
              <button
                className={
                  btn === "personaje"
                    ? "btn bg-dark rounded-0 texto luz btn_film mx-1 borde-luz"
                    : "btn bg-white rounded-0 text-black fw-bold btn_film mx-1"
                }
                onClick={() => {
                  setBtn("personaje");
                  setTabla(datos.characters);
                }}
              >
                Characters
              </button>
              <button
                className={
                  btn === "planeta"
                    ? "btn bg-dark rounded-0 texto luz btn_film mx-1 borde-luz"
                    : "btn bg-white rounded-0 text-black fw-bold btn_film mx-1"
                }
                onClick={() => {
                  setBtn("planeta");
                  setTabla(datos.planetas);
                }}
              >
                Planets
              </button>
              <button
                className={
                  btn === "especies"
                    ? "btn bg-dark rounded-0 texto luz btn_film mx-1 borde-luz"
                    : "btn bg-white rounded-0 text-black fw-bold btn_film mx-1"
                }
                onClick={() => {
                  setBtn("especies");
                  setTabla(datos.especies);
                }}
              >
                Species
              </button>
              <button
                className={
                  btn === "naves"
                    ? "btn bg-dark rounded-0 texto luz btn_film mx-1 borde-luz"
                    : "btn bg-white rounded-0 text-black fw-bold btn_film mx-1"
                }
                onClick={() => {
                  setBtn("naves");
                  setTabla(datos.naves);
                }}
              >
                Naves
              </button>
              <button
                className={
                  btn === "vehiculos"
                    ? "btn bg-dark rounded-0 texto luz btn_film mx-1 borde-luz"
                    : "btn bg-white rounded-0 text-black fw-bold btn_film mx-1"
                }
                onClick={() => {
                  setBtn("vehiculos");
                  setTabla(datos.vehiculos);
                }}
              >
                Vehiculo
              </button>
            </div>
            <div className="contenedor_pelicula bg-white rounded-3 scroll">
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
