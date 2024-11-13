import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Action = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <button
      type="button"
      for="option"
      class="list-group-item list-group-item-action boton bg-dark fw-bold text-white border-white border-1 rounded-0"
    >
      {props.titulo}
    </button>
  );
};

export default Action;
