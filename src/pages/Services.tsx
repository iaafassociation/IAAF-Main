// Imports
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { string } from "yup";
import toast from "react-hot-toast";

import Works from "@/components/sections/Works";
import Complaints from "@/components/sections/Complaints";

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

export default function Services() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const schema = string()
    .email(t("help.errors.email.invalid"))
    .required(t("help.errors.email.required"));

  const subscribe = async () => {
    try {
      setLoading(true);
      await schema.validate(email);
      const res = await fetch("https://iaaf.vercel.app/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, language: i18n.language }),
      });
      if (res.ok) {
        toast.success(t("success.subscribe"));
        setEmail("");
      } else {
        toast.error(t("error"));
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.errors[0]) {
        setError(error.errors[0]);
      }
      console.log(error);
      // toast;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className="relative bg-black/40 h-[270px] max-lg:h-[190px] max-sm:h-[90px]">
          <div className="absolute left-0 top-0 w-full h-full -z-10 services-bg" />
          <div className="relative w-full h-full flex justify-center items-end">
            <h1 className="h-fit translate-y-1/2 text-4xl max-lg:text-2xl max-sm:text-[10px] font-bold text-white text-shadow rounded-2xl bg-[#081B58] py-5 px-10">
              {t("servicesTitle.one")}
            </h1>
          </div>
        </div>
        <motion.div
          variants={variant}
          initial="hide"
          animate="show"
          className="px-32 max-lg:px-24 max-sm:px-10 pb-32 max-lg:pb-24 max-sm:pb-16"
        >
          <motion.h2
            variants={childVariant}
            className="mt-24 max-lg:mt-20 text-3xl max-lg:text-2xl max-sm:text-sm font-bold m-auto p-2 underLine w-fit"
          >
            {t("servicesTitle.two")}
          </motion.h2>
          <motion.h4
            variants={childVariant}
            className="mt-6 text-lg max-lg:text-sm max-sm:text-[8px] font-bold text-white py-3 px-8 max-sm:py-1 max-sm:px-3 w-fit bg-[#081B58] rounded-sm"
          >
            1.{t("servicesSubTitle.one")}
          </motion.h4>
          <motion.p
            variants={childVariant}
            className="mt-10 font-bold text-lg hidden lg:block"
          >
            -{" "}
            <span className="text-[#081B58]">
              {t("servicesDesc.title.one")}{" "}
            </span>
            : {t("servicesDesc.desc.one")}
          </motion.p>
          <motion.p
            variants={childVariant}
            className="mt-10 font-bold text-lg hidden lg:block"
          >
            -{" "}
            <span className="text-[#081B58]">
              {t("servicesDesc.title.two")}{" "}
            </span>
            : {t("servicesDesc.desc.two")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="my-10 max-sm:my-8 lg:hidden"
          >
            <h5 className="text-[#081B58] font-bold text-lg max-sm:text-xs max-sm:mb-5 max-sm:text-center">
              - {t("servicesDesc.title.one")} :
            </h5>
            <p className="font-bold text-sm max-sm:text-[8px]/3 mr-40 ltr:ml-40 max-sm:ltr:mx-0 max-sm:text-center max-sm:mx-0">
              {t("servicesDesc.desc.one")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            viewport={{ once: true }}
            className="my-10 max-sm:my-8 lg:hidden"
          >
            <h5 className="text-[#081B58] font-bold text-lg max-sm:text-xs max-sm:mb-5 max-sm:text-center">
              - {t("servicesDesc.title.two")} :
            </h5>
            <p className="font-bold text-sm max-sm:text-[8px]/3 mr-40 ltr:ml-40 max-sm:ltr:mx-0 max-sm:text-center max-sm:mx-0">
              {t("servicesDesc.desc.two")}
            </p>
          </motion.div>
          <motion.h4
            variants={childVariant}
            className="mt-20 max-lg:mt-16 max-sm:mt-10 text-lg max-lg:text-sm max-sm:text-[8px] max-sm:mb-6 font-bold text-white py-3 px-8 max-sm:py-1 max-sm:px-3 w-fit bg-[#081B58] rounded-sm"
          >
            2.{t("servicesSubTitle.two")}
          </motion.h4>
          <div className="w-[600px] max-lg:w-[400px] max-sm:w-[250px] m-auto">
            <motion.p
              variants={childVariant}
              className="mt-16 max-lg:mt-10 max-sm:mt-3 font-bold text-lg max-lg:text-sm max-sm:text-[8px]/3"
            >
              - {t("servicesDesc.desc.four")}
            </motion.p>
            <motion.p
              variants={childVariant}
              className="mt-16 max-lg:mt-10 max-sm:mt-3 font-bold text-lg max-lg:text-sm max-sm:text-[8px]/3"
            >
              - {t("servicesDesc.desc.five")}
            </motion.p>
            <motion.p
              variants={childVariant}
              className="mt-16 max-lg:mt-10 max-sm:mt-3 font-bold text-lg max-lg:text-sm max-sm:text-[8px]/3"
            >
              - {t("servicesDesc.desc.six")}
            </motion.p>
          </div>
          <div>
            <div className="mt-16 max-sm:mt-8 max-md:mt-10">
              <h4 className="my-9 max-md:my-4 font-bold text-xl max-lg:text-lg max-md:text-[10px]/3 ">
                {t("servicesDesc.join")}:
              </h4>
              <div className="flex max-sm:justify-evenly mt-9 max-md:my-2">
                <input
                  type="text"
                  placeholder={t("footer.email")}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="w-[200px] max-md:h-4 max-md:w-28 p-2 max-md:p-1 text-sm max-md:text-[6px] outline-none border rounded-sm border-[#E0E3EB] placeholder:text-[#E0E3EB] placeholder:text-sm max-md:placeholder:text-[6px]"
                />
                <button
                  onClick={subscribe}
                  disabled={loading}
                  className={`${
                    loading && "opacity-60"
                  } hover:opacity-70 transition-opacity duration-300 rounded-sm max-md:flex max-md:items-center max-md:h-4 text-white text-sm max-md:text-[6px] font-bold py-2 px-8 max-md:py-0 max-md:px-3 bg-[#42ABE0] mx-6 max-sm:mx-0`}
                >
                  {loading ? t("footer.loading") : t("footer.subscribe")}
                </button>
              </div>
              <p className="text-red-700 w-1/2 my-2 text-xs max-md:text-[6px]/3">
                {error}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <Works />
      <Complaints />
    </>
  );
}
