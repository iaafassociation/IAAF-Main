/* eslint-disable no-irregular-whitespace */
// Imports
import { motion } from "framer-motion";

// Module Imports
// import Consultation from "@/components/sections/Consultation";
import Events from "@/components/sections/Events";
import logo from "../assets/home-logo.png";

export default function Home() {
  return (
    <main>
      <section className="home">
        <motion.h1
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center select-none w-fit text-6xl max-xl:text-5xl max-lg:text-3xl max-sm:text-base font-black"
        >
          جمعية المستثمرين
          <br /> بالمنطقة الحرة
          <br className="max-sm:hidden" /> الاسكندرية <br />
          <span className="text-xl max-xl:text-lg max-lg:text-base max-sm:text-xs font-medium">
            دعم الاستثمار والتنمية الاقتصادية
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="home-logo"
        >
          <img src={logo} alt="logo" className="w-[60%]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="english-title  select-none"
        >
          <div className="w-fit flex flex-col">
            <p className="text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-xs font-black text-white relative">
              Investors Association of Alexandria
              <span className="text-xs max-xl:text-[10px] max-lg:text-[8px] max-sm:text-[6px] font-extrabold text-[#1162FF] absolute w-fit h-fit right-0 -bottom-3">
                Public & Private Free Zone
              </span>
            </p>
            <p className="text-base max-xl:text-sm max-lg:text-[10px] max-sm:text-[8px] max-sm:mt-1 font-light text-white text-left">
              Supporting investment and economic development
            </p>
          </div>
        </motion.div>
      </section>
      <Events />
    </main>
  );
}
