import { Outlet } from "react-router-dom";

import { Footer } from "../../modules/Footer/Footer";
import { Header } from "../../modules/Header/Header";
import { LeftSidebar } from "../../modules/LeftSidebar/LeftSidebar";
import { MainNavigation } from "../../modules/MainNavigation/MainNavigation";
import { RightSidebar } from "../../modules/RightSidebar/RightSidebar";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <section className="container">
        <LeftSidebar />
        <section className="centerContainer">
          <MainNavigation />
          <Outlet />
        </section>
        <RightSidebar />
      </section>
      <Footer />
    </>
  );
};
