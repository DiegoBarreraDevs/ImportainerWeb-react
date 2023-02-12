import React from "react";
import { Link } from "react-router-dom";
import "./HomeProyectos.css";

const HomeProyectos = () => {
  return (
    <section className="proyects" id="proyectos">
      <div className="container-proy">
        <h2 className="pr">Proyectos</h2>
        <div className="galeria1-proy">
          <div className="card-proy1">
            <a href="/emprendimientos/local90m2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Locales%2FLocal90M-5.jpg?alt=media&token=b3f82ef2-9183-43da-9ed0-6ced53de50ad"
                alt=""
                loading="lazy"
              />
            </a>
            <div className="desc-proy">
              <h2>Local 90 M2</h2>
              <p>Local comercial de 90 M2</p>
            </div>
          </div>
          <div className="card-proy1">
            <a href="/casas/75M2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa75M-1.jpg?alt=media&token=28d4667b-c167-4b3d-b61c-a059ba231346"
                alt=""
                loading="lazy"
              />
            </a>
            <div className="desc-proy">
              <h2>Casa 75 M2</h2>
              <p>Módulo habitacional de 75 M2</p>
            </div>
          </div>
        </div>
        <div className="galeria2-proy">
          <div className="card-proy2">
            <a href="/oficinas/oficina60m2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Oficinas%2FOficina60M-7.jpg?alt=media&token=40d5b967-80e6-4729-8258-6987fc5104e5"
                alt=""
                loading="lazy"
              />
            </a>
            <div className="desc-proy">
              <h2>Oficina 60 M2</h2>
              <p>2 Módulos de oficina de 15 M2 y uno de 30 M2</p>
            </div>
          </div>
          <div className="card-proy2">
            <a href="/emprendimientos/foodtrack30m2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack30M-6.jpg?alt=media&token=65b42cdb-8e01-4b27-808b-3bcf728ce6e8"
                alt=""
                loading="lazy"
              />
            </a>
            <div className="desc-proy">
              <h2>Foodtruck 30 M2</h2>
              <p>Foodtruck/Bar de 30 M2</p>
            </div>
          </div>
          <div className="card-proy2">
            <a href="/exterior/pileta15M2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta15M2-1.jpg?alt=media&token=2749e8e8-f032-4e90-8df9-6e46245368bf"
                alt=""
                loading="lazy"
              />
            </a>
            <div className="desc-proy">
              <h2>Pileta 15 M2</h2>
              <p>Container pileta de 15 M2</p>
            </div>
          </div>
        </div>
        <div className="boton">
          <Link className="btn2" to="../proyectos">
            Ver Mas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProyectos;
