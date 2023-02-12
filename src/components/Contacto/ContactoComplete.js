import React from "react";
import "./ContactoComplete.css";
import Contacto from "./Contacto";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactoComplete = () => {
  const addUser = async (userObject) => {
    await addDoc(collection(db, "users"), { userObject });
    console.log("new user added");
  };

  return (
    <section className="contact-container" id="contacto">
      <h2 className="pr">Contacto</h2>
      <div className="comp">
        <div className="container izq">
          <div className="datos">
            <h2>Administración</h2>
            <p>- Bouchard 150 | Moreno</p>
            <p>Teléfono: +54 9 11 6543-7037</p>
            <h2>Sucursales </h2>
            <p>- Av de mayo 844 | CABA</p>
            <p>- Boulevard Evita 75 | Moreno</p>
            <p>- Claudio Maria Joly 2570 | Moreno</p>
            <p>Teléfono: +54 9 11 5937-8945</p>
            <h2>Email</h2>
            <p>ventas@importainer.com.ar</p>
          </div>
          <h2 className="EnvConsulta">Envianos tu Consulta!</h2>
          <Contacto add={addUser} />
        </div>
        <div className="container-der der">
          <div className="mapouter">
            <div className="DescRight">
              <h2>Fábrica</h2>
              <p>Ruta Provincial 24 5801 Cuartel V | Moreno</p>
            </div>
            <div className="gmap_canvas">
              <iframe
                title="c"
                className="gmap_iframe"
                width="80%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6083878452!2d-58.843237884271815!3d-34.56346948046997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9760c9ec24bd%3A0x961010d5d3d2949f!2sRP24%205801%2C%20B1740AEM%20Cuartel%20V%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1636487513248!5m2!1ses-419!2sar"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoComplete;
