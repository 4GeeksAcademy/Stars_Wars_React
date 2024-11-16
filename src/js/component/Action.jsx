import React from "react";

const Action = ({ titulo }) => {
  return (
    <button
      type="button"
      for="option"
      class="list-group-item list-group-item-action boton bg-dark fw-bold text-white border-white border-1 rounded-0"
    >
      {titulo}
    </button>
  );
};

export default Action;
