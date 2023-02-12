import React, { useEffect, useRef } from "react";
import "./BannerFinal.css";

const BannerFinal = ({ children }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);
  const contenido = useRef(null);

  const Siguiente = () => {
    // Comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      // Obtenemos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];

      // Establecemos la transicion para el slideshow
      slideshow.current.style.transition = `1200ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del slideshow
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // EventeListener para cuando termina la transicion
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  useEffect(() => {
    // Lo volvemos a poner
    contenido.current.addEventListener("mouseenter", () => {
      intervaloSlideshow.current = setInterval(() => {
        Siguiente();
      }, 5000);
    });

    // Eliminamos el intervalo
    contenido.current.addEventListener("mouseleave", () => {
      clearInterval(intervaloSlideshow.current);
    });
  }, []);

  return (
    <div className="BannerFinal" ref={contenido}>
      <div className="BannerFilter">
        <div className="BannerContenido">
          <h1 className="BannerTitulo">IMPORTAINER S.A</h1>
          <h3 className="BannerSubtitulo">Construyendo Sueños</h3>
          <a className="btn BotonBanner" href="#contacto">
            Contacto
          </a>
        </div>
      </div>

      <div className="ContenedorSlide" ref={slideshow}>
        {children}
      </div>
    </div>
  );
};

export default BannerFinal;
