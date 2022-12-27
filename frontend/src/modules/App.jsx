import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

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
const OtherPage = lazy(() => import("../pages/OtherPage/OtherPage"));
const CarTowPage = lazy(() =>
  import("../pages/OtherPage/CarTowPage/CarTowPage")
);
const CarTuningPage = lazy(() =>
  import("../pages/CarTuningPage/CarTuningPage")
);
const CarAudioPage = lazy(() =>
  import("../pages/CarTuningPage/CarAudioPage/CarAudioPage")
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
        <Route path="car-tuning" element={<Outlet />}>
          <Route path="avtoakustyka" element={<CarAudioPage />} />
          <Route path=":article" element={<CarTuningPage />} />
        </Route>
        <Route path="our-features/:article" element={<OurFeaturesPage />} />
        <Route path="other" element={<Outlet />}>
          <Route path="buksyruvannya-avtomobilya" element={<CarTowPage />} />
          <Route path=":other" element={<OtherPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
