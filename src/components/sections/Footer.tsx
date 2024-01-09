// Imports
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="bg-sec py-6 max-lg:py-4">
        <h1 className="text-center text-3xl max-lg:text-2xl font-bold text-white text-shadow">
          {t("footer.title")}
        </h1>
      </div>
      <div className="py-12 max-md:py-4 max-lg:py-8 px-14 max-md:px-4 flex justify-between max-md:gap-4">
        <div className="w-2/5 max-md:w-1/2">
          <div className="flex my-9 max-md:my-2">
            <div className="ml-4 ltr:mr-4 max-lg:text-sm max-md:text-[6px] text-sec font-bold">
              {t("footer.address.title")}:
            </div>
            <p className="font-light max-lg:text-sm max-md:text-[6px]/3">
              {t("footer.address.text")}
            </p>
          </div>
          <div className="flex my-9 max-md:my-2">
            <div className="ml-4 ltr:mr-4 max-lg:text-sm max-md:text-[6px] text-sec font-bold">
              {t("footer.phone")}:
            </div>
            <p className="font-light max-lg:text-sm max-md:text-[6px]">
              {" "}
              <a href="tel:+034500220">
                <bdo dir="ltr">03 450 0220</bdo>
              </a>{" "}
              /{" "}
              <a href="tel:+034500221">
                <bdo dir="ltr">03 450 0221</bdo>
              </a>
            </p>
          </div>
          <div className="flex my-9 max-md:my-2">
            <div className="ml-4 ltr:mr-4 max-lg:text-sm max-md:text-[6px] text-sec font-bold">
              {t("footer.email")}:
            </div>
            <p className="font-light max-lg:text-sm max-md:text-[6px]">
              <a href="mailto:iaafalex@iaafalex.com">iaafalex@iaafalex.com</a>
            </p>
          </div>
          <div className="flex my-9 max-md:my-2">
            <div className="ml-4 ltr:mr-4 max-lg:text-sm max-md:text-[6px] text-sec font-bold">
              {t("footer.face")}:
            </div>
            <p className="font-light max-lg:text-sm max-md:text-[6px]">
              <a
                href="https://www.facebook.com/profile.php?id=61553268788158&mibextid=ZbWKwL"
                target="_blank"
              >
                facebook.com/iaafalex
              </a>
            </p>
          </div>
        </div>
        <div className="w-2/5 max-md:w-1/2">
          <div>
            <h4 className="my-9 max-md:my-2 font-bold max-lg:text-sm max-md:text-[8px]">
              {t("footer.socials")}:
            </h4>
            <div className="flex">
              <div className="mx-4 max-md:mx-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61553268788158&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <BsFacebook className="text-[#3D445C] w-8 h-8 max-md:w-5 max-md:h-5 hover:text-[#1877f2] transition-colors duration-300" />
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/iaaf-alex-12306229b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <div className="mx-4 max-md:mx-1 max-md:p-[5px] w-8 h-8 max-md:w-5 max-md:h-5 rounded-full transition-colors duration-300 bg-[#3D445C] hover:bg-[#0a66c2] flex justify-center items-center">
                  <FaLinkedinIn className="text-white w-full" />
                </div>
              </a>
              {/* <div className="mx-4 max-md:mx-1 max-md:p-[5px] w-8 h-8 max-md:w-5 max-md:h-5 rounded-full bg-[#3D445C] flex justify-center items-center">
                <a href="#" target="_blank">
                  <FaTwitter className="text-white w-full" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B298D] text-white text-xs max-md:text-[8px] font-normal text-center py-5">
        <p className="mb-2">{t("footer.copyright")}</p>
        <p className="mt-2">
          {t("footer.madeBy")}{" "}
          <span className="font-black text-sm max-md:text-xs text-[#9038d8]">
            <a href="https://codeverse-team.vercel.app/" target="_blank">
              CodeVerse
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
