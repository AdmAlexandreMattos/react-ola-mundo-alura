import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export const PaginaPadrao = ({ children }) => {
  return (
    <main>
      <Banner />

      <Outlet />
      {children}
    </main>
  );
};
