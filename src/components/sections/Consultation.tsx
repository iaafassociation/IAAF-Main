// Imports
import { useTranslation } from "react-i18next";

export default function Consultation() {
  const { t } = useTranslation();

  return (
    <section className="consultation">
      <div className="w-1/2">
        <p className="text-3xl max-lg:text-lg max-md:text-sm text-white my-5 font-bold">
          {t("consultation.title")}
        </p>
        <p className="text-lg max-lg:text-sm max-md:text-[8px] text-white my-5">
          <a href="tel:+034500221">
            {t("consultation.phone")} <bdo dir="ltr">+03 4500221</bdo>
          </a>
        </p>
        <p className="text-lg max-lg:text-sm max-md:text-[8px] text-white my-5">
          {t("consultation.fax")}
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <button className="w-fit h-fit py-3 px-4 max-md:p-2 max-lg:text-sm max-md:text-xs hover:bg-white hover:text-black transition-colors duration-300 text-white border border-white font-semibold max-md:ltr:mr-4 max-md:ml-4 max-lg:ltr:mr-20 max-lg:ml-20 ml-32 ltr:mr-32">
          {t("consultation.button")}
        </button>
      </div>
      <div className="absolute left-0 top-0 w-full h-full -z-10 consultation-bg" />
    </section>
  );
}
