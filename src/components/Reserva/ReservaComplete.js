import React from "react";
import "./ReservaComplete.css";
import Reserva from "./Reserva";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const ReservaComplete = () => {

    const addUser = async (userObject) => {
    await addDoc(collection(db, "reservas"), { userObject });
    console.log("new user added");
  };

  return (
    <div className="ReservaContainer">
      <h1 className="ReservaTitle">Felicidades!</h1>
      <h2 className="ReservaTitle">
        Estas a solo unos clicks de tener tu casa
      </h2>
      <h3 className="ReservaTitle">
        En breve un asesor se va a contactar contigo
      </h3>
      <Reserva add={addUser}/>
    </div>
  );
};

export default ReservaComplete;
