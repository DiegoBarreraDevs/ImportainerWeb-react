import React, { useRef } from "react";
import "./SlideShow.css";

const SlideShow = ({children}) => {
  const slideshow = useRef(null);

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

  const Anterior = () => {
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento de slideshow
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "1200ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div className="SlideShow">
      <div className="ContSlideShow" ref={slideshow}>
        {children}
      </div>
      <div className="Controles">
        <button className="BotonSlide izquierdo" onClick={Anterior}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="BotonSlide derecho" onClick={Siguiente}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
export default SlideShow;
