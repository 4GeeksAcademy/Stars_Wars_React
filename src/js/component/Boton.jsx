import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Boton = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="col-6 text-center">
      <button
        className={
          store.Valor === props.valor ||
          (store.Valor === 300 && props.valor === "ALL")
            ? "boton-valor btn bg-black border border-2 text-white fw-bold w-75"
            : "btn bg-black border border-2 text-white fw-bold opacity-50 w-75"
        }
        onClick={() => {
          props.valor === "ALL"
            ? actions.CambiarValor(300)
            : actions.CambiarValor(props.valor);
        }}
      >
        {props.valor === "ALL" ? "ALL" : props.valor + "-" + props.valor}
      </button>
    </div>
  );
};

export default Boton;
