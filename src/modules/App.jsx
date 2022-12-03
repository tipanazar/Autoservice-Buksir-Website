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

const App = () => {
  return (
    <Suspense fallback={<Loader backgroundColor="rgb(255, 255, 255)" />}>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
