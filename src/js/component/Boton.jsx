import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Boton = ({ valor }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="col-6 text-center">
      <button
        className={
          store.Valor === valor || (store.Valor === 300 && valor === "ALL")
            ? "boton-valor btn bg-black border border-2 text-white fw-bold w-75"
            : "btn bg-black border border-2 text-white fw-bold opacity-50 w-75"
        }
        onClick={() => {
          valor === "ALL"
            ? actions.CambiarValor(300)
            : actions.CambiarValor(valor);
        }}
      >
        {valor === "ALL" ? "ALL" : valor + "-" + valor}
      </button>
    </div>
  );
};

export default Boton;
