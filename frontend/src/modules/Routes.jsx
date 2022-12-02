import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Loader } from "../shared/components/Loader";
import { LayoutPage } from "../pages/LayoutPage";
import { HomePage } from "../pages/HomePage";
import { ContactsPage } from "../pages/ContactsPage";
import { VacanciesPage } from "../pages/VacanciesPage/VacanciesPage";
import { CertificatesPage } from "../pages/CertificatesPage/CertificatesPage";
import { CarServicePage } from "../pages/CarServicePage";
import { PartnersPage } from "../pages/PartnersPage";
import { CarTunningPage } from "../pages/CarTunningPage";
import { NewsPage } from "../pages/NewsPage";
import { OurFeaturesPage } from "../pages/OurFeaturesPage";
import { AdminSigninPage } from "../pages/AdminSigninPage";
import { AdminCreateArticlePage } from "../pages/AdminCreateArticlePage";
import { PublicRoute } from "../shared/components/PublicRoute";
import { PrivateRoute } from "../shared/components/PrivateRoute";

export const MyRoutes = () => {
  return (
    <Suspense fallback={<Loader backgroundColor="rgba(0, 0, 0, 0.4)" />}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="vacancies" element={<VacanciesPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="car-service/:article" element={<CarServicePage />} />
          <Route path="partners/:partner" element={<PartnersPage />} />
          <Route path="car-tunning/:article" element={<CarTunningPage />} />
          <Route path="news/:article" element={<NewsPage />} />
          <Route path="our-feature/:article" element={<OurFeaturesPage />} />
        </Route>
        <Route path="/admin">
          <Route element={<PrivateRoute />}>
            <Route index element={<AdminCreateArticlePage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="signin" element={<AdminSigninPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
