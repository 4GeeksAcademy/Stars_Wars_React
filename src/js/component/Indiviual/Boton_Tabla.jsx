import React from "react";

const Boton_Tabla = ({ categoria, funcionTabla, funcionBtn, Tabla, Btn }) => {
  return (
    <button
      className={
        Btn === Tabla
          ? "btn bg-black rounded-0 texto luz btn_film mx-1 borde-luz border border-2 border-bottom-0"
          : "btn bg-white rounded-0 text-black fw-bold btn_film mx-1"
      }
      onClick={() => {
        funcionTabla;
        funcionBtn;
      }}
    >
      Categoria
    </button>
  );
};
export default Boton_Tabla;
