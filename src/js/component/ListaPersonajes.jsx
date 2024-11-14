import React, { useContext, useEffect, useState } from "react";
import Carta from "./Carta.jsx";
import Action from "./Action.jsx";
import { Context } from "../store/appContext.js";
import Boton from "./Boton.jsx";
import Paginacion from "./Paginacion.jsx";

const ListaPersonajes = () => {
  const { store, actions } = useContext(Context);
  const [Pagina, setPagina] = useState([0, store.Valor]);
  const [Tabla, setTabla] = useState(store.personajes);
  const [Input, setInput] = useState("");

  const Buscar = () => {
    setTabla(Tabla.filter((elem) => elem.name.toLowerCase().includes(Input)));
  };

  useEffect(() => {
    setTabla(store.All);
    Buscar();
  }, [Input]);

  useEffect(() => {
    setPagina([0, store.Valor]);
  }, [store.Valor]);
  useEffect(() => {
    setTabla(store.personajes);
  }, [store.personajes]);

  const handleElementoBuscar = (e) => {
    Input.length > e.target.value.length ? setTabla(store.All) : "";
    setInput(e.target.value);
    e.target.value.length === 0 ? setTabla(store.All) : "";
    console.log(Tabla + "handle");
  };
  return (
    <div className=" lista-contenedor bg-dark py-3 borde-luz">
      <Paginacion
        funcion={setPagina}
        pagina={Pagina}
        tabla={Tabla}
        inputFuncion={handleElementoBuscar}
      />
      <div className="row m-0 p-0">
        <div className="col-lg-9 col-md-12 lista-personajes">
          <div className="row">
            <div className="row p-3 justify-content-center ">
              {Tabla.slice(Pagina[0], Pagina[1]).map((elem) => {
                return (
                  <Carta
                    id={elem.uid}
                    nombre={elem.name}
                    url={elem.img === undefined ? elem.url : elem.img}
                    categoria={elem.categoria}
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
                setPagina([0, store.Valor]);
              }}
            >
              <Action titulo="CHARACTERS" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Peliculas);
                setPagina([0, store.Valor]);
              }}
            >
              <Action titulo="Films" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Naves);
                setPagina([0, store.Valor]);
              }}
            >
              <Action titulo="Starships" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Vehiculos);
                setPagina([0, store.Valor]);
              }}
            >
              <Action titulo="Vehicles" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Especies);
                setPagina([0, store.Valor]);
              }}
            >
              <Action titulo="Species" />
            </div>
            <div
              onClick={() => {
                setTabla(store.Planetas);
                setPagina([0, store.Valor]);
              }}
            >
              <Action titulo="Planets" />
            </div>
            <div
              className={
                store.Favoritos.length === 0 ? "opacity-75 disabled" : ""
              }
              onClick={() => {
                store.Favoritos.length === 0 ? "" : setTabla(store.Favoritos);
                setPagina([0, store.Valor]);
              }}
            >
              <Action titulo="Favorites" />
            </div>
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
