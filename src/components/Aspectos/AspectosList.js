import React, { Component } from "react";
import AspectosCard from "./AspectosCard";
import "./AspectosList.css";
import test1 from "./../../images/test/test1.jpg";
import test2 from "./../../images/test/test2.jpg";
import fibra from "./../../images/test/firbra.jpg";

export default class AspectosList extends Component {
  render() {
    return (
      <div className="contenedor-asp">
        <div className="AspectosUp">
          <AspectosCard
            img={test1}
            title="Container"
            description="¿De qué material están construidos los Containers?
            Principalmente el material de los contenedores marítimos es Acero Autopatinable o también
            conocido como Acero Corten. Es un tipo de acero fabricado de una composición química que le
            proporciona características particulares que protegen las piezas ante cualquier tipo de corrosión u
            oxidación.
            En Importainer SA tomamos muy en cuenta la durabilidad de nuestro producto, es por eso que
            como punto destacable tenemos que nuestros containers cuentan con una película en la parte
            superficial del acero la cual lo hace impermeable al agua y vapores, lo que impide cualquier tipo de
            oxidación hacia el interior de la estructura metálica.
            
            ¿Qué dimensiones tienen los Contenedores?
            A modo genérico, las dimensiones estándar y características de los contenedores aptos para su
            reacondicionado como vivienda son:
            Inicialmente este tipo de construcción, no está contemplada al detalle en la normativa (eficiencia,
            iluminación, ventilación, aislamiento, etc.) aunque si que da pautas en cuanto al cumplimiento de
            conceptos generales de estructuras, aislamiento térmico y acústico, etc. Aplicables a cualquier tipo
            de construcción y uso.
            No existen solo estos tres tipos de contenedores, pero son estos los que se usan para la creación
            de módulos habitacionales."
          />
          <AspectosCard
            img={fibra}
            title="Aislación térmica"
            description="La lana de vidrio es una fibra mineral fabricada con millones de filamentos de vidrio unidos con un
            aglutinante. El espacio libre con aire atrapado entre las fibras aumentan la resistencia a
            la transmisión de calor.
            Fabricación
            Se comienza fundiendo a una temperatura de 1450 °C una mezcla de arena natural, aditivos
            y vidrio reciclado. El vidrio así obtenido es convertido en fibras. Para ello se recurre a un método
            de alta velocidad similar al utilizado para fabricar algodón de azúcar, forzándolo a través de una
            rejilla fina mediante una fuerza centrífuga, enfriándose al entrar en contacto con el aire."
          />
          <AspectosCard
            img={test2}
            title="Pilotes"
            description="Simplemente con la construcción de pilotes de 40 x 40 cm en forma de cubo con una altura
            indeterminada (queda a gusto del cliente) nos ahorramos grandes cantidades de dinero (a
            comparación de si se construiría una base, platea, estructura o encadenado).
            ¿Solo sobre pilotes? No necesariamente. Puede ir sobre cualquier cosa, incluso se suelen utilizar
            en casas pequeñas, los durmientes de madera de las vías de tren o construyen plateas de concreto
            con enmallado. Solo lo recomendable por practicidad y economía es la utilización de pilotes.
            ¿PUEDEN IR DIRECTO AL SUELO?
            Los contenedores se pueden colocar sobre el suelo directo, pero esto conlleva unas desventajas.
            Desde la humedad del suelo la cual puede llegar a dañar el metal, y, además, todos los sistemas de
            desagüe y entrada de agua al módulo están colocados en la parte externa e inferior del módulo
            hasta la posibilidad que el mismo contenedor pueda hundirse y desnivelarse, en resumen,
            apoyándolo directamente estaríamos perdiendo todos los beneficios que conlleva."
          />
          {/* <AspectosCard 
            img="https://live.staticflickr.com/65535/51565428388_103b07de77_k.jpg"
            title="Acero"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere eveniet molestias velit eligendi ullam quasi iure saepe obcaecati fugit inventore vel maiores perferendis, rerum doloremque. Doloribus consequuntur, velit perspiciatis, sit alias "
          />
          <AspectosCard
            img="https://live.staticflickr.com/65535/51565869609_109b6d663d_k.jpg"
            title="Madera"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere eveniet molestias velit eligendi ullam quasi iure saepe obcaecati fugit inventore vel maiores perferendis, rerum doloremque. Doloribus consequuntur, velit perspiciatis, sit alias "
          />
          <AspectosCard 
            img="https://live.staticflickr.com/65535/51565868024_f343e57024_k.jpg"
            title="Vidrio"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere eveniet molestias velit eligendi ullam quasi iure saepe obcaecati fugit inventore vel maiores perferendis, rerum doloremque. Doloribus consequuntur, velit perspiciatis, sit alias "          
          /> */}
        </div>
      </div>
    );
  }
}
