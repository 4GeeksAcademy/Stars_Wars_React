import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Carta = ({ id, nombre, url, categoria }) => {
  const { store, actions } = useContext(Context);
  const [Favorito, setFavorito] = useState(false);
  const [eliminar, setEliminar] = useState(false);

  useEffect(() => {
    Favorito === true
      ? actions.AgregarFavoritos({
          uid: id,
          name: nombre,
          img: url,
          categoria: "Favorite",
        })
      : "";
  }, [Favorito]);
  useEffect(() => {
    store.Favoritos.find((elem) => {
      if (elem.img === url) {
        setFavorito(elem.name);
      }
    });
  });
  return (
    <div
      className={
        eliminar === true && categoria === "Favorite"
          ? "d-none"
          : "col-xxl-2 mx-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 mb-2 h-auto carta"
      }
    >
      <div
        class="card p-0 m-0 border-3 borde-carta border-white  fondo m-2 "
        style={{ width: "11rem" }}
      >
        <div
          className={
            Favorito === nombre && categoria != "Favorite"
              ? "d-none"
              : "row m-0 bg-white text-warning fw-bold py-1"
          }
          onClick={() => {
            categoria === "Favorite"
              ? actions.QuitarFavoritos(nombre)
              : setFavorito(Favorito === false ? true : false);

            categoria === "Favorite" ? setEliminar(true) : "";
          }}
        >
          <div
            className={
              categoria === "Favorite"
                ? "col-12 text-center text-danger fw-bold mx-0"
                : "col-12 text-center mx-0"
            }
          >
            <span>{categoria === "Favorite" ? "Delete" : "AddToFavorite"}</span>
          </div>
        </div>
        <img
          src={url}
          class="card-img-top border-bottom borde-carta border-white rounded-0"
          alt=""
        />
        <div class="text-center text-white">
          <p class="card-title py-2 fw-bold">
            {nombre === "unknown" ? " ¿?" : nombre}
          </p>
          <p class="card-title luz fw-bold">
            {categoria === "unknown" ? " ¿?" : categoria}
          </p>
          <div className="row pt-3">
            <div className="col-8">
              <button className="fw-bold text-white btn btn-outline-dark w-100 rounded-0 border-3 border-bottom-0 border-start-0 borde-carta border-white">
                See More
              </button>
            </div>
            <div className="col-4 text-end align-content-end id">
              <span className=" pt-1 px-2 bg-carta rounded-0 border-white border border-2 border-end-0 border-bottom-0 borde-carta luz fw-bold text-white ">
                {id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carta;
