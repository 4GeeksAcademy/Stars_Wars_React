import React, { useContext, useEffect, useState } from "react";
import Carta from "./Carta.jsx";
import Action from "./Action.jsx";
import { Context } from "../store/appContext.js";

const ListaPersonajes = () => {
  const [Page, setPage] = useState(0);
  const { store, actions } = useContext(Context);

  const [Tabla, setTabla] = useState(store.personajes);

  useEffect(() => {
    setTabla(store.personajes);
  }, [store.personajes]);
  return (
    <div className=" lista-contenedor bg-dark py-3 borde-luz">
      <div className="row m-0 p-0">
        <div className="col-lg-9 col-md-12 lista-personajes">
          <div className="row">
            <div className="row p-3 justify-content-center">
              {Tabla.map((elem) => {
                return (
                  <Carta
                    id={elem.id === undefined ? elem.uid : elem.id}
                    nombre={elem.name}
                    url={elem.img === undefined ? elem.url : elem.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 mt-md-3 mt-3 mt-lg-0">
          <div class="list-group text-center rounded-top">
            {/* <button
              onClick={() => {
                console.log(Tabla);
                setTabla(store.DatosPersonajes);
              }}
            >
              a
            </button> */}
            <div
              onClick={() => {
                setTabla(store.All);
              }}
            >
              <Action titulo="ALL" />
            </div>
            <div
              onClick={() => {
                setTabla(store.DatosPersonajes);
              }}
            >
              <Action titulo="CHARACTERS" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Peliculas);
              }}
            >
              <Action titulo="Films" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Naves);
              }}
            >
              <Action titulo="Starships" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Vehiculos);
              }}
            >
              <Action titulo="Vehicles" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Especies);
              }}
            >
              <Action titulo="Species" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Planetas);
              }}
            >
              <Action titulo="Planets" />
            </div>
          </div>
          <div className="d-flex flex-column mt-3">
            <input
              type="text"
              className="form-control align-content-end rounded-0 bg-black text-white text-center fw-bold"
              placeholder="Search"
            />
            <p className="fw-bold text-white text-center">
              You can search by typing the name of what you need to look for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaPersonajes;
// {store.DatosPersonajes.map((elem) => {
//   console.log(elem);

//   return (
//     <Carta
//       id={elem.id}
//       nombre={elem.name}
//       genero={elem.gender}
//       altura={elem.height}
//       url={elem.img}
//     />
//   );
// })}
