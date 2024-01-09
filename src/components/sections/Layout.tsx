// Imports
import { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";

// Module Imports
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.language === "ar"
      ? document.querySelector("html")?.setAttribute("dir", "rtl")
      : document.querySelector("html")?.setAttribute("dir", "ltr");
  }, [i18n.language]);

  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
      <Toaster />
    </main>
  );
}
