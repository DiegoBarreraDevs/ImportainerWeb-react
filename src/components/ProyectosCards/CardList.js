import React from "react";
import CardContainer from "./CardContainer";
import "./CardList.css";

const CardList = () => {
  return (
    <div className="card">
      <CardContainer
        title="Casa 120M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa120M-3.jpg?alt=media&token=ac270369-b2c7-439f-995d-e88883789c89"
        link="/casas/120M2"
      />
      <CardContainer
        title="Casa 90M2"
        beds="3,"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa90M-9.jpg?alt=media&token=cf21a1e8-4e60-4481-b1c7-e90e06500c49"
        baths="2"
        link="/casas/90M2"
      />
      <CardContainer
        title="Casa 75M2"
        beds="2"
        baths="2.5"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa75M-1.jpg?alt=media&token=28d4667b-c167-4b3d-b61c-a059ba231346"
        link="/casas/75M2"
      />
      <CardContainer
        title="Casa 45M2"
        beds="2"
        baths="1"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa45M-4.jpg?alt=media&token=3fc78917-ecb7-4a7f-9130-18a4514d6683"
        link="/casas/45M2"
      />
      <CardContainer
        title="Casa 30M2"
        beds="1"
        baths="1"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa30M-3.jpg?alt=media&token=b902959e-82de-465e-9fee-cea886d42568"
        link="/casas/30M2"
      />
      <CardContainer
        title="Casa 15M2"
        beds="1"
        baths="1"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-3.jpg?alt=media&token=48991ad1-0d6d-4d5d-b245-63ccd8e8963a"
        link="/casas/15M2"
      />
    </div>
  );
};

export default CardList;
