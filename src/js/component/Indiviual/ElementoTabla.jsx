import React from "react";

const ElementoTabla = ({ nombre }) => {
  return (
    <div className="col-12 w-100 agrandar border border-1 texto text-center elemento_tabla">
      <p className="pt-3">{nombre}</p>
    </div>
  );
};
export default ElementoTabla;
