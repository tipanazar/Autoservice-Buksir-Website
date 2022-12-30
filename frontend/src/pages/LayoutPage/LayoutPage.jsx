import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../../shared/components/Loader";
import { Footer } from "../../modules/Footer";
import { Header } from "../../modules/Header";
import { LeftSidebar } from "../../modules/LeftSidebar";
import { MainNavigation } from "../../shared/components/MainNavigation";
import { RightSidebar } from "../../modules/RightSidebar";

import s from "./LayoutPage.module.scss";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <main className={s.container}>
        <LeftSidebar sidebarWrapperClass={s.sidebarWrapper} />
        <div className={s.centerContainer}>
          <MainNavigation
            className={s.mainNavigationBlock}
            linksDisplayClass=""
            listItemDisplayClass=""
          />
          <article className={s.articleWrapper} id="articleWrapper">
            <Suspense
              fallback={<Loader backgroundColor="rgba(255, 255, 255, 0)" />}
            >
              <Outlet />
            </Suspense>
          </article>
        </div>
        <RightSidebar sidebarWrapperClass={s.sidebarWrapper} />
      </main>
      <Footer />
    </>
  );
};
