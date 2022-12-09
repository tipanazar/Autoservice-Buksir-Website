import { Outlet } from "react-router-dom";

import { Footer } from "../../modules/Footer/Footer";
import { Header } from "../../modules/Header/Header";
import { LeftSidebar } from "../../modules/LeftSidebar/LeftSidebar";
import { MainNavigation } from "../../shared/components/MainNavigation/MainNavigation";
import { RightSidebar } from "../../modules/RightSidebar/RightSidebar";

import s from "./LayoutPage.module.scss";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <section className={s.container}>
        <LeftSidebar />
        <section className={s.centerContainer}>
          <MainNavigation
            className={s.mainNavigationBlock}
            linksDisplayClass=""
          />
          <main>
            <Outlet />
          </main>
        </section>
        <RightSidebar />
      </section>
      <Footer />
    </>
  );
};
