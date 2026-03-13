import React from "react";
import UniversalModal from "../modals/UniversalModal";
import Navbar from "../navigation/Navbar";
import RouteLoaderController from "../system/RouteLoaderController";
import PageTransition from "../Loaders/PageTransition";


interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col">
      <RouteLoaderController />

      <PageTransition />

      <Navbar />
      <UniversalModal />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;