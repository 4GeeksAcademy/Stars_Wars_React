import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Paginacion = ({ funcion, pagina, tabla, inputFuncion }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className=" m-0">
      <div className="col-lg-9 col-md-12 d-flex justify-content-between mx-3">
        <div
          className={
            pagina[0] === 0
              ? "luz text-white borde-luz border flecha-desactivada rounded-pill mx-3 mb-3"
              : "luz text-white borde-luz border flechas rounded-pill mx-3 mb-3"
          }
          onClick={() => {
            pagina[0] === 0
              ? ""
              : funcion([pagina[0] - store.Valor, pagina[1] - store.Valor]);
          }}
        >
          <span aria-hidden="true">&laquo;</span>
        </div>
        <input
          type="text"
          className="form-control align-content-end rounded-0 bg-black text-danger text-center fw-bold w-100 rounded-pill"
          placeholder="Search"
          onChange={inputFuncion}
        />
        <div
          className={
            pagina[1] > tabla.length
              ? "luz text-white borde-luz border flecha-desactivada rounded-pill mx-3 mb-3"
              : "luz text-white borde-luz border flechas rounded-pill mx-3 mb-3"
          }
          onClick={() => {
            pagina[1] > tabla.length
              ? ""
              : funcion([pagina[0] + store.Valor, pagina[1] + store.Valor]);
          }}
        >
          <span aria-hidden="true">&raquo;</span>
        </div>
      </div>
    </div>
  );
};

export default Paginacion;
