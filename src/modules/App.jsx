import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Loader } from "../shared/components/Loader";
import { LayoutPage } from "../pages/LayoutPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const SparePartsShopPage = lazy(() =>
  import("../pages/SparePartsShopPage/SparePartsShopPage")
);
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const CertificatesPage = lazy(() =>
  import("../pages/CertificatesPage/CertificatesPage")
);
const CarServicePage = lazy(() =>
  import("../pages/CarServicePage/CarServicePage")
);
const PartnersPage = lazy(() => import("../pages/PartnersPage/PartnersPage"));
const CarTunningPage = lazy(() =>
  import("../pages/CarTunningPage/CarTunningPage")
);
const OurFeaturesPage = lazy(() =>
  import("../pages/OurFeaturesPage/OurFeaturesPage")
);
// const { NewsPage } = lazy(() => import("../pages/NewsPage"));

const App = () => {
  return (
    <Suspense fallback={<Loader backgroundColor="rgba(255, 255, 255, 0.5)" />}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="spare-parts-shop" element={<SparePartsShopPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="car-service/:article" element={<CarServicePage />} />
          <Route path="partners/:partner" element={<PartnersPage />} />
          <Route path="car-tunning/:article" element={<CarTunningPage />} />
          {/* <Route path="news/:article" element={<NewsPage />} /> */}
          <Route path="our-feature/:article" element={<OurFeaturesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
