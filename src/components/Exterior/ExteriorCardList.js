import React from "react";
import ExteriorCard from "./ExteriorCard";
import "../ProyectosCards/CardList.css";

const ExteriorList = () => {
  return (
    <div className="card">
      <ExteriorCard
        title="Quincho 15M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho15M-3.jpg?alt=media&token=beb16517-35de-48c9-a8a4-5f696e4099c3"
        link="/exterior/quincho15M2"
      />
      <ExteriorCard
        title="Quincho 30M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho30M-6.jpg?alt=media&token=66d53013-70c0-4d19-83a3-3fbe4565154c"
        link="/exterior/quincho30M2"
      />
      <ExteriorCard
        title="Pileta 15M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta15M2-1.jpg?alt=media&token=2749e8e8-f032-4e90-8df9-6e46245368bf"
        link="/exterior/pileta15M2"
      />
      <ExteriorCard
        title="Pileta 30M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta30M-3.jpg?alt=media&token=f0bce7da-fc02-4c80-aaa4-113fa3fe7afe"
        link="/exterior/pileta30M2"
      />
    </div>
  );
};

export default ExteriorList;
