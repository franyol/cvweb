import { ReactNode } from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

export const MainLayout = ({ children }: { children: ReactNode; }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
