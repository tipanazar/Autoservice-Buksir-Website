import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "../pages/HomePage/HomePage";
import { LayoutPage } from "../pages/LayoutPage/LayoutPage";

export const MyRoutes = () => {
  return (
    <Suspense fallback={"...loading"}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
