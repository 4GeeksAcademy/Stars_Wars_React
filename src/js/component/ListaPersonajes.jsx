import React, { useContext, useEffect, useState } from "react";
import Carta from "./Carta.jsx";
import Action from "./Action.jsx";
import { Context } from "../store/appContext.js";
import Boton from "./Boton.jsx";

const ListaPersonajes = () => {
  const { store, actions } = useContext(Context);

  const [Page, setPage] = useState([0, store.Valor]);
  const [Tabla, setTabla] = useState(store.personajes);

  useEffect(() => {
    setPage([0, store.Valor]);
  }, [store.Valor]);

  useEffect(() => {
    setTabla(store.personajes);
  }, [store.personajes]);
  return (
    <div className=" lista-contenedor bg-dark py-3 borde-luz">
      <div className="row">
        <div className="col-lg-9 col-md-12 d-flex justify-content-center">
          <div
            className={
              Page[0] === 0
                ? "luz text-white borde-luz border flecha-desactivada rounded-pill mx-3 mb-3"
                : "luz text-white borde-luz border flechas rounded-pill mx-3 mb-3"
            }
            onClick={() => {
              Page[0] === 0
                ? ""
                : setPage([Page[0] - store.Valor, Page[1] - store.Valor]);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </div>

          <div
            className={
              Page[1] > Tabla.length
                ? "luz text-white borde-luz border flecha-desactivada rounded-pill mx-3 mb-3"
                : "luz text-white borde-luz border flechas rounded-pill mx-3 mb-3"
            }
            onClick={() => {
              Page[1] > Tabla.length
                ? ""
                : setPage([Page[0] + store.Valor, Page[1] + store.Valor]);
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col-lg-9 col-md-12 lista-personajes">
          <div className="row">
            <div className="row p-3 justify-content-center ">
              {Tabla.slice(Page[0], Page[1]).map((elem) => {
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
            <div
              onClick={() => {
                setTabla(store.All);
              }}
            >
              <Action titulo="ALL" />
            </div>
            <div
              onClick={() => {
                setTabla(store.personajes);
                setPage([0, store.Valor]);
              }}
            >
              <Action titulo="CHARACTERS" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Peliculas);
                setPage([0, store.Valor]);
              }}
            >
              <Action titulo="Films" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Naves);
                setPage([0, store.Valor]);
              }}
            >
              <Action titulo="Starships" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Vehiculos);
                setPage([0, store.Valor]);
              }}
            >
              <Action titulo="Vehicles" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Especies);
                setPage([0, store.Valor]);
              }}
            >
              <Action titulo="Species" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Planetas);
                setPage([0, store.Valor]);
              }}
            >
              <Action titulo="Planets" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Favoritos);
                setPage([0, store.Valor]);
              }}
            >
              <Action titulo="Favotitos" />
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
          <div className="my-3">
            <p className="text-white luz text-center fw-bold">
              ___________________________________________________
            </p>
            <p className="text-white fw-bold text-center luz">
              Would you like to see more or less? You can do it with these
              buttons :)
            </p>
            <div className="row">
              <Boton valor={4} />
              <Boton valor={6} />
            </div>
            <div className="row">
              <Boton valor={10} />
              <Boton valor={20} />
            </div>
            <div className="row">
              <Boton valor={25} />
              <Boton valor={"ALL"} />
            </div>
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
