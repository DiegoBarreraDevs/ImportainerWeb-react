import React, { Suspense } from "react";
import Compañia from "../components/Compañia";
import HomeAspectos from "../components/HomeAspectos/HomeAspectos";
import HomeProyectos from "../components/HomeProyectos/HomeProyectos";
import NavBarPrinc from "../components/NavBarPrinc/NavBarPrinc";
import Wpp from "../components/wpp";
import BannerF from "./BannerF";
import OfertaList from "../components/ofertas/OfertaList";

const HomeClientes = React.lazy(() =>
  import("../components/HomeClientes/HomeClientes")
);
const ContactoComplete = React.lazy(() =>
  import("../components/Contacto/ContactoComplete")
);
const FooterPrinc = React.lazy(() =>
  import("../components/FooterPrinc/FooterPrinc")
);

const Home = () => {
  return (
    <div>
      <BannerF />
      <NavBarPrinc />
      <Compañia />
      <OfertaList />
      <HomeProyectos />
      <HomeAspectos />
      {/* El suspense es para que se renderice esa seccion solo cuando sea necesario */}
      <Suspense fallback={<div>Cargando...</div>}>
        <HomeClientes />
        <ContactoComplete />
        <FooterPrinc />
      </Suspense>
      <Wpp />
    </div>
  );
};

export default Home;
