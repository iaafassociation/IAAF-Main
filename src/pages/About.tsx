// Imports
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const variant = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <main>
      <motion.section
        variants={variant}
        initial="hide"
        animate="show"
        className="about"
      >
        <motion.h1
          variants={childVariant}
          className="text-shadow text-4xl max-lg:text-2xl max-md:text-base text-[#DADADA] font-extrabold text-center mb-10 max-lg:mb-8 max-md:mb-5"
        >
          {t("aboutTitle.one")}
        </motion.h1>
        <motion.p
          variants={childVariant}
          className="text-[#DADADA] text-2xl max-lg:text-xl max-md:text-[8px]/3 font-extrabold mb-28 max-lg:mb-24 max-md:mb-10"
        >
          {t("aboutDescription.main")}
        </motion.p>
        <motion.h2
          variants={childVariant}
          className="text-center text-shadow text-3xl max-lg:text-2xl max-md:text-base font-black mb-14 max-lg:mb-10 max-md:mb-8"
        >
          {t("aboutTitle.two")}
        </motion.h2>
        <motion.p
          variants={childVariant}
          className="text-lg max-lg:text-base max-md:text-[8px]/3  font-extrabold text-shadow"
        >
          - {t("aboutDescription.one")}
        </motion.p>
        <motion.p
          variants={childVariant}
          className="text-lg max-lg:text-base max-md:text-[8px]/3  font-extrabold text-shadow mt-16 max-lg:mt-12 max-md:mt-8"
        >
          - {t("aboutDescription.two")}
        </motion.p>
        <motion.p
          variants={childVariant}
          className="text-lg max-lg:text-base max-md:text-[8px]/3  font-extrabold text-shadow mt-16 max-lg:mt-12 max-md:mt-8"
        >
          - {t("aboutDescription.three")}
        </motion.p>
        <motion.p
          variants={childVariant}
          className="text-lg max-lg:text-base max-md:text-[8px]/3  font-extrabold text-shadow mt-16 max-lg:mt-12 max-md:mt-8"
        >
          - {t("aboutDescription.four")}
        </motion.p>
        <motion.p
          variants={childVariant}
          className="text-lg max-lg:text-base max-md:text-[8px]/3  font-extrabold text-shadow mt-16 max-lg:mt-12 max-md:mt-8"
        >
          - {t("aboutDescription.five")}
        </motion.p>
        <motion.p
          variants={childVariant}
          className="text-lg max-lg:text-base max-md:text-[8px]/3  font-extrabold text-shadow mt-16 max-lg:mt-12 max-md:mt-8"
        >
          - {t("aboutDescription.six")}
        </motion.p>
        <motion.p
          variants={childVariant}
          className="text-lg max-lg:text-base max-md:text-[8px]/3  font-extrabold text-shadow mt-16 max-lg:mt-12 max-md:mt-8"
        >
          - {t("aboutDescription.seven")}
        </motion.p>
      </motion.section>
    </main>
  );
}
