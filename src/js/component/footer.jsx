import React, { Component } from "react";

export const Footer = () => {
  return (
    <footer className="bg-black py-3 border-bottom borde-luz border-2 border-white">
      <div className="row mx-0">
        <div className="col-md-5 col-12 d-flex flex-column justify-content-center">
          <p className="mx-3 text-white fw-bold text-center text-md-start">
            {" "}
            Created By <span className="text-primary">Nelson De Abreu</span>
          </p>
          <p className="mx-3 fw-bold text-white text-center text-md-end text-lg-center">
            API ---{" "}
            <a
              href="https://www.swapi.tech/documentation#people"
              className=" text-decoration-none text-danger fw-bold"
              target="_blank"
            >
              Click Here!
            </a>
          </p>
        </div>
        <div className="col-2 text-center d-none d-md-block">
          <img
            src="https://img.freepik.com/fotos-premium/primer-plano-casco-darth-vader-fondo-negro_791316-108651.jpg"
            alt=""
            className="img-fluid img-footer"
          />
        </div>
        <div className="col-md-5 col-12 d-flex flex-column">
          <p className="text-white fw-bold text-center text-md-end">
            Contact {"-> "}
            <a
              href="https://www.linkedin.com/in/nelson-de-abreu-ab87042b6/"
              className="text-decoration-none fw-bold text-primary "
              target="_blank"
            >
              Linkedin
            </a>
          </p>
          <p className="fw-bold text-white text-center">
            Repository at{" "}
            <a
              href="https://github.com/NelsonJDAS"
              className="text-decoration-none fw-bold text-danger "
              target="_blank"
            >
              Git-Hub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
