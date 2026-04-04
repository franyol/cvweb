import Home from "../pages/Home";
import { Routes, Route } from "react-router";

export const navitems = {
    "Home": "/",
}

export function AppRoutes() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
  );
}
