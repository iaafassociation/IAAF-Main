/* eslint-disable no-irregular-whitespace */
// Imports
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import useSWR from "swr";
import { AnimatePresence, motion } from "framer-motion";

// Module Imports
import { EventProps } from "@/types";
import { AiFillCloseCircle } from "react-icons/ai";
import { Skeleton } from "../ui/skeleton";

export default function Events() {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeEvent, setActiveEvent] = useState<EventProps | null>(null);
  const [show, setShow] = useState(false);

  const fetcher = (key: string) => fetch(key).then((res) => res.json());
  const { data, isLoading } = useSWR(
    `https://iaaf.vercel.app/api/event`,
    fetcher
  );

  const prevValue = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const nextValue = () => {
    if (activeIndex === data.length - 1) {
      setActiveIndex(0);
    } else setActiveIndex(activeIndex + 1);
  };

  return (
    <section className="bg-[#E2E3E3] pt-7 ">
      <h1 className="font-extrabold text-3xl max-md:text-base text-shadow mb-6 underLine w-fit m-auto p-2">
        {t("events.news")}
      </h1>
      <div className="flex">
        <div
          onClick={prevValue}
          className="flex items-center rtl:order-3 p-4 text-3xl max-sm:text-lg cursor-pointer"
        >
          <MdArrowBackIos />
        </div>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="flex-1 rtl:order-2">
              <Skeleton className="w-full h-80" />
            </div>
          ) : (
            data &&
            data.map(
              (event: EventProps, i: number) =>
                i === activeIndex && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    key={event._id}
                    className="flex-1 max-sm:bg-[#243B98] max-sm:rounded rtl:order-2 mx-6 max-md:mx-0 bg-white rounded-xl px-6 py-4 max-sm:p-2 news-shadow"
                  >
                    {event.image ? (
                      <div className="bg-white rounded-xl max-sm:rounded max-sm:px-3 max-sm:pb-4 max-sm:pt-2 px-4 pt-4 pb-7  news-shadow">
                        <div className="font-extrabold text-lg max-lg:text-base mb-10 max-sm:mb-4 text-center">
                          {i18n.language === "ar"
                            ? event.titleAR
                            : event.titleEN}
                        </div>
                        <div className="flex max-sm:flex-col-reverse gap-12 max-sm:gap-0">
                          <div className="w-1/2 max-sm:w-full">
                            <p className="text-sm max-lg:text-xs max-sm:text-[6px]/3 font-bold clipText h-[100px] max-lg:h-[80px] max-sm:h-[60px]">
                              {i18n.language === "ar"
                                ? event.descriptionAR
                                : event.descriptionEN}
                            </p>
                            <div className="flex mt-10 max-sm:mt-4 items-center max-sm:justify-between">
                              <button
                                onClick={() => {
                                  setActiveEvent(event);
                                  setShow(true);
                                }}
                                className="hover:bg-white hover:text-black transition-colors duration-300 border-2 border-black bg-black font-bold rounded-lg max-lg:text-xs max-sm:text-[6px]/3 py-2 px-3 text-white"
                              >
                                {t("events.button")}
                              </button>
                              <p className="mx-4 text-black text-lg max-lg:text-base max-sm:text-[10px]/3 font-bold">
                                {new Date(event.date).getDate()}/
                                {new Date(event.date).getMonth() + 1}/
                                {new Date(event.date).getFullYear()}
                              </p>
                            </div>
                          </div>
                          <div className="w-1/2 max-sm:w-3/4 max-w-[400px] max-sm:mb-4 m-auto rounded-3xl overflow-hidden max-h-44">
                            <img
                              src={event.image}
                              alt="news"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white rounded-xl max-sm:rounded  max-sm:px-3 max-sm:pb-4 max-sm:pt-2 px-4 pt-4 pb-7 news-shadow flex gap-12">
                        <div className="w-full flex flex-col justify-between items-center">
                          <div className="font-extrabold text-lg max-lg:text-base mb-10 max-sm:mb-4 text-center">
                            {i18n.language === "ar"
                              ? event.titleAR
                              : event.titleEN}
                          </div>
                          <p className="text-sm max-lg:text-xs max-sm:text-[6px]/3 font-bold clipText h-[100px] max-lg:h-[80px] max-sm:h-[60px]">
                            {i18n.language === "ar"
                              ? event.descriptionAR
                              : event.descriptionEN}
                          </p>
                          <div className="flex mt-10 max-sm:mt-4 items-center max-sm:justify-between w-full">
                            <button
                              onClick={() => {
                                setActiveEvent(event);
                                setShow(true);
                              }}
                              className="hover:bg-white hover:text-black transition-colors duration-300 border-2 border-black bg-black font-bold rounded-lg max-lg:text-xs max-sm:text-[6px]/3 py-2 px-3 text-white"
                            >
                              {t("events.button")}
                            </button>
                            <p className="mx-4 text-black text-lg max-lg:text-base max-sm:text-[10px]/3 font-bold">
                              {new Date(event.date).getDate()}/
                              {new Date(event.date).getMonth() + 1}/
                              {new Date(event.date).getFullYear()}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
            )
          )}
        </AnimatePresence>

        <div
          onClick={nextValue}
          className="flex items-center rtl:order-1 p-4 text-3xl max-sm:text-lg cursor-pointer"
        >
          <MdArrowForwardIos />
        </div>
      </div>

      {show && (
        <div className="fixed flex justify-center items-center w-screen h-screen left-0 top-0 z-50 bg-black/50">
          <div className="relative flex flex-col max-h-[90dvh] w-3/4 max-w-[550px] bg-white">
            <div
              className="absolute right-4 top-2 cursor-pointer"
              onClick={() => {
                setShow(false);
                setActiveEvent(null);
              }}
            >
              <AiFillCloseCircle
                className={`w-5 h-5 ${activeEvent?.image && "text-white"}`}
              />
            </div>
            {activeEvent?.image && (
              <div className="w-full ">
                <img
                  src={activeEvent?.image}
                  alt="events"
                  className="aspect-[9/4] w-full"
                />
              </div>
            )}
            <h1 className="text-2xl px-4 max-lg:text-lg max-sm:text-sm font-extrabold text-center mt-10 max-sm:mt-4">
              {i18n.language === "ar"
                ? activeEvent?.titleAR
                : activeEvent?.titleEN}
            </h1>
            <h3 className="text-center px-4 text-2xl max-lg:text-lg max-sm:text-sm font-extrabold mt-4 max-sm:mt-2">
              {new Date(activeEvent?.date as string).getDate()}/
              {new Date(activeEvent?.date as string).getMonth() + 1}/
              {new Date(activeEvent?.date as string).getFullYear()}
            </h3>
            <p className="my-4 max-sm:my-2 p-4 text-lg max-lg:text-sm max-sm:text-[8px]/3 font-bold overflow-auto">
              {i18n.language === "ar"
                ? activeEvent?.descriptionAR
                : activeEvent?.descriptionEN}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
