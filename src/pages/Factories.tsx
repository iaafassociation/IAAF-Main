// Imports
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import useSWRInfinite from "swr/infinite";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Module Imports
import { FactoryProps } from "@/types";
import { FaXmark } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";

export default function Factories() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState<FactoryProps | null>(null);
  const [activeImage, setActiveImage] = useState<{
    image: string | undefined;
    i: number;
  } | null>(null);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const LIMIT = 9;
  const fetcher = (key: string) => fetch(key).then((res) => res.json());
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (index) =>
      `https://iaaf.vercel.app/api/factory?search=${search}&limit=${LIMIT}&page=${index}`,
    fetcher
  );

  const factories: FactoryProps[] = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < LIMIT);

  const nextImage = (i: number) => {
    if (i + 1 === active?.images.length) {
      setActiveImage({ image: active.images[0], i: 0 });
    } else {
      setActiveImage({ image: active?.images[i + 1], i: i + 1 });
    }
  };
  const prevImage = (i: number) => {
    if (i === 0) {
      const num = active?.images ? active.images.length - 1 : 0;
      setActiveImage({ image: active?.images[num], i: num });
    } else {
      setActiveImage({ image: active?.images[i - 1], i: i - 1 });
    }
  };

  return (
    <section className="bg-[#E6E6E6] py-20 max-sm:pt-6 max-sm:pb-10">
      <h1 className="underLine w-fit m-auto p-2 font-extrabold text-3xl max-sm:text-sm text-shadow mb-6">
        {t("guideTitle")}
      </h1>
      <div className="bg-sec rounded-full w-[400px] max-lg:w-[350px] max-sm:w-[200px] guide-shadow m-auto max-lg:px-4 max-lg:py-3 px-6 py-4 max-sm:px-2 max-sm:py-1.5 flex justify-between mb-10">
        <input
          type="text"
          placeholder={t("search")}
          value={text}
          onChange={(e) => {
            if (e.target.value) {
              setText(e.target.value);
            } else {
              setText(e.target.value);
              setSearch("");
            }
          }}
          className="bg-transparent outline-none placeholder:font-bold max-lg:text-sm max-sm:text-[8px]/3 w-[300px] max-lg:w-[270px] max-sm:w-[160px] border-b text-white border-white/60"
        />
        <FaXmark
          onClick={() => {
            setSearch("");
            setText("");
          }}
          className="relative w-5 h-5 max-lg:w-3 max-lg:h-3 max-sm:w-2 max-sm:h-2 rtl:left-4 ltr:right-4 top-1 text-white cursor-pointer"
        />
        <button
          onClick={() => {
            setSearch(text);
          }}
        >
          <FaSearch
            color="white"
            className="w-9 h-9 max-lg:w-7 max-lg:h-7 max-sm:w-4 max-sm:h-4"
          />
        </button>
      </div>
      {isLoading ? (
        // <div className="text-center text-4xl">جاري تحميل البيانات...</div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 max-sm:gap-3 px-14 max-sm:px-8 mb-28 max-sm:mb-6 max-lg:mb-20">
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="max-sm:hidden">
            <Skeleton className="aspect-[9/6] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-60 h-8 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            <Skeleton className="w-28 h-7 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
          <div className="sm:hidden">
            <Skeleton className="aspect-[10/3] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          </div>
        </div>
      ) : error ? (
        <div className="text-center text-4xl">
          حدث خطأ يرجى المحاولة مرة اخرى
        </div>
      ) : isEmpty ? (
        <div className="text-center text-4xl">لا يوجد بيانات لعرضها</div>
      ) : (
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 max-sm:gap-3 px-14 max-sm:px-8 mb-28 max-sm:mb-6 max-lg:mb-20">
          {factories.map((factory) => (
            <div
              key={factory._id}
              onClick={() => {
                setActive(factory);
                setActiveImage({ image: factory.images[0], i: 0 });
                setShow(true);
              }}
              className="sm:opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer max-sm:flex max-sm:flex-row-reverse"
            >
              <div className="factory-shadow aspect-[9/6] max-sm:bg-[#C2C6D1] max-sm:max-w-[40%] max-sm:py-2 max-sm:px-3 max-sm:border max-sm:border-black">
                <img
                  src={factory.images[0]}
                  alt="factory"
                  className="sm:w-full max-sm:rounded-sm"
                />
              </div>
              <div className="max-sm:bg-white max-sm:flex-1 max-sm:py-3 px-6 max-sm:px-3 sm:mt-4 max-sm:border-y rtl:max-sm:border-r-[17px] ltr:max-sm:border-l-[17px] max-sm:border-black">
                <h4 className="my-2 max-sm:my-1 text-base max-lg:text-[10px]/3 max-sm:text-[8px]/3 font-extrabold factory-clipText sm:text-center">
                  {i18n.language === "ar"
                    ? factory.descriptionAR
                    : factory.descriptionEN}
                </h4>
                <p className="text-xs max-lg:text-[8px]/3 max-sm:text-[6px]/3 text-shadow font-medium sm:text-center">
                  {i18n.language === "ar" ? factory.nameAR : factory.nameEN}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setSize(size + 1)}
        disabled={isLoadingMore || isReachingEnd}
        className={`${
          (isLoadingMore || isReachingEnd) && "opacity-60"
        } hover:bg-sec transition-colors duration-300 more-shadow max-sm:px-4 px-8 bg-[#292E3D] my-10 m-auto block text-xl max-sm:text-xs font-bold text-white py-3 max-sm:py-1`}
      >
        {isLoadingMore ? t("loading") : isReachingEnd ? t("noMore") : t("more")}
      </button>
      {show && (
        <div className="fixed flex justify-center items-center w-screen h-screen left-0 top-0 z-50 bg-black/50">
          <div className="relative flex max-sm:flex-col-reverse w-3/4 max-lg:w-10/12 max-sm:w-11/12 bg-white">
            <div
              className="absolute right-4 top-2 cursor-pointer"
              onClick={() => {
                setShow(false);
                setActive(null);
              }}
            >
              <AiFillCloseCircle className="w-5 h-5" />
            </div>
            <div className="w-1/2 max-sm:w-full flex flex-col">
              <div className="text-lg max-lg:text-xs max-md:text-[10px]/3 font-black p-8 max-md:pb-5 max-md:px-3 border-b border-black overflow-auto max-h-[50vh] max-sm:max-h-[20dvh]">
                {i18n.language === "ar"
                  ? active?.descriptionAR
                  : active?.descriptionEN}
              </div>
              <div className="py-10 px-4 max-md:px-2 max-md:py-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-semibold my-2 max-lg:text-[10px]/3 max-md:text-[8px]/3 ">
                    . {i18n.language === "ar" ? active?.nameAR : active?.nameAR}
                  </p>
                  <p className="font-semibold my-2 max-lg:text-[10px]/3 max-md:text-[8px]/3 ">
                    . {i18n.language === "ar" ? active?.typeAR : active?.typeAR}
                  </p>
                  <p className="font-semibold my-2 max-lg:text-[10px]/3 max-md:text-[8px]/3 ">
                    . {active?.phone}
                  </p>
                </div>
                <p className="mt-10 max-lg:mt-6 max-md:mt-4 opacity-60 underLine w-fit max-lg:text-[10px]/3 max-md:text-[8px]/3 ">
                  <a href={`mailto:${active?.email}`}>{active?.email}</a>
                </p>
              </div>
            </div>
            <div className="w-1/2 max-sm:w-full flex flex-col justify-center pt-14 pb-8 max-md:pt- bg-[#828388]">
              <div className="flex">
                <div
                  onClick={() => prevImage(activeImage?.i as number)}
                  className="flex items-center rtl:order-3 p-4 max-lg:p-2 text-3xl cursor-pointer"
                >
                  <MdArrowBackIos className="max-lg:w-4 max-lg:h-4" />
                </div>
                <div className="rtl:order-2 flex-1 factory-card-shadow">
                  <img
                    src={activeImage?.image as string}
                    alt="factory"
                    className="w-full aspect-[9/6] select-none"
                  />
                </div>
                <div
                  onClick={() => nextImage(activeImage?.i as number)}
                  className="flex items-center rtl:order-1 p-4 max-lg:p-2 text-3xl cursor-pointer"
                >
                  <MdArrowForwardIos className="max-lg:w-4 max-lg:h-4" />
                </div>
              </div>
              <div className="w-full flex rtl:flex-row-reverse mt-4 justify-center cursor-pointer">
                {active?.images.map((image, i) => (
                  <div
                    onClick={() => {
                      setActiveImage({ image, i });
                    }}
                    key={image}
                    className={`${
                      i === activeImage?.i ? "bg-[#4C4D50]" : "bg-white"
                    } w-3 h-6 rounded-full mx-1`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
