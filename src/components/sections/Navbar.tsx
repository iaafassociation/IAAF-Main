// Imports
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaChevronLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

// Module Imports
import logo from "../../assets/logo.jpg";
import servicesLogo from "../../assets/services-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  // const [lang, setLang] = useState("ar");
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("language");

    if (lang) {
      i18n.changeLanguage(lang);
    }

    window.addEventListener("scroll", () => {
      if (window.innerWidth >= 1024) {
        if (scrollY >= 190) {
          setActive(true);
        } else setActive(false);
      } else if (window.innerWidth >= 768) {
        if (scrollY >= 126) {
          setActive(true);
        } else setActive(false);
      } else {
        if (scrollY >= 42) {
          setActive(true);
        } else setActive(false);
      }
    });
  }, [i18n]);

  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`${
        location.pathname === "/services"
          ? active
            ? "fixed bg-white border-b-2 border-black w-full"
            : "fixed w-full bg-transparent"
          : "sticky bg-white border-b-2 border-black"
      } top-0 z-50  flex rtl:flex-row-reverse px-10 max-md:px-2 items-center justify-between`}
    >
      <div className="flex rtl:flex-row-reverse items-center">
        <div className="mr-20 max-lg:mr-10 max-md:mr-4">
          <img
            src={
              location.pathname === "/services"
                ? active
                  ? logo
                  : servicesLogo
                : logo
            }
            alt="logo"
            className="h-20 max-lg:h-16 max-md:h-12"
          />
        </div>
        <div>
          <button
            onClick={() => {
              i18n.language === "ar"
                ? document.querySelector("html")?.setAttribute("dir", "ltr")
                : document.querySelector("html")?.setAttribute("dir", "rtl");
              i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
              localStorage.setItem(
                "language",
                i18n.language === "ar" ? "ar" : "en"
              );
            }}
            className="uppercase font-['Work Sans'] font-bold text-base max-lg:text-sm max-md:text-xs"
          >
            {i18n.language}
          </button>
        </div>
      </div>
      <nav>
        <ul className="flex flex-row-reverse max-md:hidden">
          <li className="mx-5 max-lg:mx-3 font-extrabold text-sm max-lg:text-xs">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-main" : "text-black"
              }
            >
              {t("services")}
            </NavLink>
          </li>
          <li className="mx-5 max-lg:mx-3 font-extrabold text-sm max-lg:text-xs">
            <NavLink
              to="/guide"
              className={({ isActive }) =>
                isActive ? "text-main" : "text-black"
              }
            >
              {t("guide")}
            </NavLink>
          </li>
          <li className="mx-5 max-lg:mx-3 font-extrabold text-sm max-lg:text-xs">
            <NavLink
              to="/members"
              className={({ isActive }) =>
                isActive ? "text-main" : "text-black"
              }
            >
              {t("members")}
            </NavLink>
          </li>
          <li className="mx-5 max-lg:mx-3 font-extrabold text-sm max-lg:text-xs">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-main" : "text-black"
              }
            >
              {t("about")}
            </NavLink>
          </li>
          <li className="mx-5 max-lg:mx-3 font-extrabold text-sm max-lg:text-xs">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-main" : "text-black"
              }
            >
              {t("home")}
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden mr-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <HiBars3BottomRight size={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="nav-shadow p-0">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <DropdownMenuItem className="relative flex items-center justify-center text-[10px] rounded-none">
                  {t("Home")}
                  <FaChevronLeft className="absolute right-2" size={5} />
                </DropdownMenuItem>
              </NavLink>
              <DropdownMenuSeparator className="h-[1px] bg-black m-0" />
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <DropdownMenuItem className="relative flex items-center justify-center text-[10px] rounded-none">
                  {t("about")}
                  <FaChevronLeft className="absolute right-2" size={5} />
                </DropdownMenuItem>
              </NavLink>
              <DropdownMenuSeparator className="h-[1px] bg-black m-0" />
              <NavLink
                to="/members"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <DropdownMenuItem className="relative flex items-center justify-center text-[10px] rounded-none">
                  {t("members")}
                  <FaChevronLeft className="absolute right-2" size={5} />
                </DropdownMenuItem>
              </NavLink>
              <DropdownMenuSeparator className="h-[1px] bg-black m-0" />
              <NavLink
                to="/guide"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <DropdownMenuItem className="relative flex items-center justify-center text-[10px] rounded-none">
                  {t("guide")}
                  <FaChevronLeft className="absolute right-2" size={5} />
                </DropdownMenuItem>
              </NavLink>
              <DropdownMenuSeparator className="h-[1px] bg-black m-0" />
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <DropdownMenuItem className="relative flex items-center justify-center text-[10px] rounded-none">
                  {t("services")}
                  <FaChevronLeft className="absolute right-2" size={5} />
                </DropdownMenuItem>
              </NavLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden text-main font-extrabold text-xs">
        {location.pathname === "/"
          ? t("home")
          : location.pathname === "/about"
          ? t("about")
          : location.pathname === "/members"
          ? t("members")
          : location.pathname === "/services"
          ? t("services")
          : t("guide")}
      </div>
    </motion.header>
  );
}
