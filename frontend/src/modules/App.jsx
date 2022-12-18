import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { LayoutPage } from "../pages/LayoutPage";
import { getTemplates } from "../redux/articles/articlesOperations";

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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemplates());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="spare-parts-shop" element={<SparePartsShopPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="car-service/:article" element={<CarServicePage />} />
        <Route path="car-tunning/:article" element={<CarTunningPage />} />
        <Route path="our-features/:article" element={<OurFeaturesPage />} />
        <Route path="other/:other" element={<PartnersPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
