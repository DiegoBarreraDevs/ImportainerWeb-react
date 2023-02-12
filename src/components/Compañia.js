import React, { Component } from "react";
import "./styles/Compañia.css";

export default class Compañia extends Component {
  render() {
    return (
      <div className="cont-comp">
        <section class="about container" id="compañia">
          <div class="container-text">
            <h2 class="about-title">Nuestra compañia</h2>
            <p className="texto-compañia">
              {/* <b>¡Bienvenidos!</b> <br /> */}
              {/* Importainer - Construyendo sueños <br /> */}
              En Importainer tenemos más de 9 años creando hogares y brindando
              felicidad a numerosas familias. En nuestro trabajo nos dedicamos a
              la fabricación de <b>Viviendas Modulares</b> y sustentables
              construidas en
              <b> contenedores marítimos</b>. 
              <br />
              <br />
              Nuestras <b>Casas Containers</b> se caracterizan por su
              arquitectura
              <b> moderna</b>, <b>ecológica</b>, <b>durable</b> y{" "}
              <b>confortable</b>. Su gran versatilidad permite mudar y llevar su
              proyecto a donde sea que te encuentres, adaptándose a distintos
              tamaños y tipos de terrenos.  <br />
              En esta hermosa familia tenemos la visión de que este método de
              construcción ofrece una alternativa habitacional diferente,
              reduciendo tiempos y costes de fabricación, en relación a
              construcciones convencionales.
              <br />
              <br />
              <b>¿Que estas esperando para formar parte de nuestra familia?</b>
            </p>
          </div>
          <div class="about-img">
            <img
              src="https://live.staticflickr.com/65535/51633742925_6535f1ced8_z.jpg"
              alt=""
              class="img-about img-1"
            />
            <img
              src="https://live.staticflickr.com/65535/51633115613_0c8730e91f_z.jpg"
              alt=""
              class="img-about img-2"
            />
            <div class="img-g">
              <img
                src="https://live.staticflickr.com/65535/51633740980_f51f157061_z.jpg"
                alt=""
                class="img-about2"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
