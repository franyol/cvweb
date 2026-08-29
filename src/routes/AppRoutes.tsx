import Status from "@/pages/Status";
import Home from "../pages/Home";
import { Routes, Route } from "react-router";

export const navitems = {
  "Home": "/",
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/status" element={<Status />} />
      <Route path="/Slippery-Hands" element={<iframe src="/Slippery-Hands/index.html" />} />
    </Routes>
  );
}
