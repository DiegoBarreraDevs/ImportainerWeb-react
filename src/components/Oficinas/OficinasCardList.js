import React from 'react'
import OficinasCard from '../Oficinas/OficinasCard';
import "../ProyectosCards/CardList.css";

const OficinasCardList = () => {
    return(
        <div className="card">
        <OficinasCard
          title="Oficina 60M2"
          beds="4"
          baths="2"
          img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Oficinas%2FOficina60M-7.jpg?alt=media&token=40d5b967-80e6-4729-8258-6987fc5104e5"
          link="/oficinas/oficina60m2"
        />
      </div>
    )
}

export default OficinasCardList

