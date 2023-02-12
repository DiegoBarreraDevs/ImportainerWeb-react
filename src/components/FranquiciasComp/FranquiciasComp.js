import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./FranquiciasComp.css";

export default class FranquiciasComp extends Component {
  render() {
    return (
      <div className="containerf">
        <h1 className="titulo">Franquicias</h1>

        <div className="vid">
          <ReactPlayer
            url="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Video-F-W.mp4?alt=media&token=0749f09c-9267-4353-bb60-da498357e524"
            width="100%"
            height="100%"
            controls
            muted
          />
        </div>

        <div className="description">
          <h2>Sobre la franquicia</h2>
          <p className="desc">
            El formato de franquicia nos permite crecer y expandirnos a lo largo
            del país con una propuesta que favorece una óptima combinación entre
            rentabilidad, crecimiento y sustentabilidad del negocio, que
            beneficia tanto al franquiciado como a la marca. <br />
            Nuestra propuesta de franquicia está dirigida a aquellas personas
            interesadas en participar en un modelo de negocio serio, sólido,
            100% funcional y sobre todo con rentabilidad comprobada. El
            franquiciado tendrá todos los derechos para operar donde sea que se
            encuentre, y contará con respaldado por nuestro know how, el aval
            tanto de nuestras modalidades de negocio como también de nuestros
            planes de financiación.
            <br />
            Es pocas palabras, cada franquiciado contará con el apoyo y el
            prestigio de una empresa reconocida en el mercado tanto por su larga
            y sólida trayectoria como por la calidad y confort de sus productos
            y su capacidad a la resolución y respuestas a las necesidades de
            todos sus clientes.
          </p>
        </div>
        <div className="botonf">
          <a
            className="btnf"
            target="_blank"
            rel="noreferrer"
            href="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Manual-Franquicias-Importainer.pdf?alt=media&token=fec77cb7-5262-412e-b7ef-e52eb9544194"
          >
            Visualizar PDF
          </a>
        </div>
      </div>
    );
  }
}
