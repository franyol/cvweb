import { Navigate, Route, Routes } from "react-router";

import Home from "@/pages/Home";
import Status from "@/pages/Status";
import { LanguageLayout } from "@/components/LanguageLayout";
import { LanguageRedirect } from "@/components/LanguageRedirect";

export function AppRoutes() {
  return (
    <Routes>
      {/* Initial visit */}
      <Route path="/" element={<LanguageRedirect />} />

      {/* Localized application */}
      <Route path="/:lang" element={<LanguageLayout />}>
        <Route index element={<Home />} />
        <Route path="status" element={<Status />} />

        <Route
          path="Slippery-Hands"
          element={
            <iframe
              src="/Slippery-Hands/index.html"
              className="h-screen w-full border-0"
            />
          }
        />
      </Route>

      {/* Unknown routes */}
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
