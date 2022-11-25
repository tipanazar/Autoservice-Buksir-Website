import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { LayoutPage } from "../pages/LayoutPage";
import { HomePage } from "../pages/HomePage";
import { ContactsPage } from "../pages/ContactsPage";

export const MyRoutes = () => {
  return (
    <Suspense fallback={"...loading"}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
