import React from "react";

const PlanetaCarta = ({ id, nombre, img }) => {
  return (
    <div className="mx-3">
      <div class="card text-bg-dark agrandar rounded-circle">
        <img src={img} class="card-img rounded-circle" alt="..." />
        <div class="card-img-overlay align-content-center">
          <h5 class="card-title texto">
            HomeWorld {">"} {nombre}
          </h5>

          <p class="card-text align-content-center">
            <span>
              ID {">"} {id}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanetaCarta;
