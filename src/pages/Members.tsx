// Imports
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { motion } from "framer-motion";

// Module Imports
import { MemberProps } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function Members() {
  const { t, i18n } = useTranslation();

  const fetcher = (key: string) => fetch(key).then((res) => res.json());
  const { data, isLoading } = useSWR(
    "https://iaaf.vercel.app/api/members",
    fetcher
  );

  const chairman: MemberProps =
    data?.find((el: MemberProps) => el.role === "chairman") || null;
  const vice: MemberProps =
    data?.find((el: MemberProps) => el.role === "vice") || null;
  const secretary: MemberProps =
    data?.find((el: MemberProps) => el.role === "secretary") || null;
  const treasurer: MemberProps =
    data?.find((el: MemberProps) => el.role === "treasurer") || null;

  return (
    <section className="members">
      <h1 className="underLine text-shadow text-4xl max-lg:text-2xl max-sm:text-lg font-bold m-auto py-2 w-fit mb-12 max-sm:mb-4">
        {t("membersPage.title")}
      </h1>
      {isLoading ? (
        <div className="w-[30%] m-auto">
          <Skeleton className="w-1/2 m-auto aspect-[6/9] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          <Skeleton className="w-full h-8 max-lg:h-6 max-sm:h-3 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
          <Skeleton className="w-1/2 h-7 max-lg:h-6 max-sm:h-3 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
        </div>
      ) : (
        chairman && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            viewport={{ once: true }}
            className="w-[30%] m-auto"
          >
            <div className="overflow-hidden w-1/2 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow">
              <img
                src={chairman.image}
                alt="Director"
                className="w-full object-cover aspect-[6/9]"
              />
            </div>
            <h2 className="text-center text-shadow text-2xl max-lg:text-base max-sm:text-[10px]/3 font-black mb-2">
              {t("membersPage.director")}
            </h2>
            <p className="text-shadow text-lg max-lg:text-sm max-sm:text-[8px]/3 font-bold text-center">
              {i18n.language === "ar" ? chairman.nameAR : chairman.nameEN}
            </p>
          </motion.div>
        )
      )}

      <div className="mt-14 max-lg:mt-11 max-sm:mt-6 grid grid-cols-3 px-32 max-lg:px-20 max-sm:px-5 gap-16  max-sm:gap-11 mb-24 max-sm:mb-16">
        {isLoading ? (
          <>
            <div>
              <Skeleton className="w-1/2 m-auto aspect-[6/9] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
              <Skeleton className="w-full h-8 max-lg:h-6 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
              <Skeleton className="w-1/2 h-7 max-lg:h-6 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
            <div>
              <Skeleton className="w-1/2 m-auto aspect-[6/9] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
              <Skeleton className="w-full h-8 max-lg:h-6 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
              <Skeleton className="w-1/2 h-7 max-lg:h-6 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
            <div>
              <Skeleton className="w-1/2 m-auto aspect-[6/9] rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
              <Skeleton className="w-full h-8 max-lg:h-6 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
              <Skeleton className="w-1/2 h-7 max-lg:h-6 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
          </>
        ) : (
          <>
            {secretary && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "tween" }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden w-1/2 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-1 members-shadow">
                  <img
                    src={secretary.image}
                    alt="secretary"
                    className="w-full object-cover aspect-[6/9]"
                  />
                </div>
                <h2 className="text-center text-shadow text-xl max-lg:text-[12px]/3 max-sm:text-[10px]/3 font-black mb-1">
                  {t("membersPage.general")}
                </h2>
                <p className="text-shadow text-base max-lg:text-[10px]/3 max-sm:text-[8px]/3 font-bold text-center">
                  {i18n.language === "ar" ? secretary.nameAR : secretary.nameEN}
                </p>
              </motion.div>
            )}
            {vice && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "tween" }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden w-1/2 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-1 members-shadow">
                  <img
                    src={vice.image}
                    alt="vice"
                    className="w-full object-cover aspect-[6/9]"
                  />
                </div>
                <h2 className="text-center text-shadow text-xl max-lg:text-[12px]/3 max-sm:text-[10px]/3 font-black mb-1">
                  {t("membersPage.deputy")}
                </h2>
                <p className="text-shadow text-base max-lg:text-[10px]/3 max-sm:text-[8px]/3 font-bold text-center">
                  {i18n.language === "ar" ? vice.nameAR : vice.nameEN}
                </p>
              </motion.div>
            )}
            {treasurer && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "tween" }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden w-1/2 m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-1 members-shadow">
                  <img
                    src={treasurer.image}
                    alt="treasurer"
                    className="w-full object-cover aspect-[6/9]"
                  />
                </div>
                <h2 className="text-center text-shadow text-xl max-lg:text-[12px]/3 max-sm:text-[10px]/3 font-black mb-1">
                  {t("membersPage.cash")}
                </h2>
                <p className="text-shadow text-base max-lg:text-[10px]/3 max-sm:text-[8px]/3 font-bold text-center">
                  {i18n.language === "ar" ? treasurer.nameAR : treasurer.nameEN}
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
      <h2 className="bg-sec text-shadow rounded-lg m-auto w-1/2 max-lg:w-4/5 text-white py-2 text-center text-base max-sm:text-xs font-black">
        {t("membersPage.title")}
      </h2>
      <div className="mt-14 max-sm:mt-10 grid grid-cols-5 max-sm:grid-cols-3 px-32 max-lg:px-20 max-sm:px-10 gap-11 max-lg:gap-9 max-sm:gap-8">
        {isLoading ? (
          <>
            <div>
              <Skeleton className="w-full aspect-square rounded-full mb-2 members-shadow" />
              <Skeleton className="w-3/4 h-7 max-lg:h-4 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
            <div>
              <Skeleton className="w-full aspect-square rounded-full mb-2 members-shadow" />
              <Skeleton className="w-3/4 h-7 max-lg:h-4 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
            <div>
              <Skeleton className="w-full aspect-square rounded-full mb-2 members-shadow" />
              <Skeleton className="w-3/4 h-7 max-lg:h-4 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
            <div>
              <Skeleton className="w-full aspect-square rounded-full mb-2 members-shadow" />
              <Skeleton className="w-3/4 h-7 max-lg:h-4 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
            <div>
              <Skeleton className="w-full aspect-square rounded-full mb-2 members-shadow" />
              <Skeleton className="w-3/4 h-7 max-lg:h-4 max-sm:h-3  m-auto rounded-br-md rounded-bl-md mb-3 max-sm:mb-2 members-shadow" />
            </div>
          </>
        ) : (
          data &&
          data
            .filter((member: MemberProps) => member.role === "member")
            .map((member: MemberProps) => (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "tween" }}
                viewport={{ once: true }}
                key={member._id}
              >
                <div className="overflow-hidden aspect-square rounded-full mb-2 members-shadow">
                  <img
                    src={member.image}
                    alt="Director"
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-shadow text-base max-lg:text-xs max-sm:text-[8px]/3 font-black text-center">
                  {i18n.language === "ar" ? member.nameAR : member.nameEN}
                </p>
              </motion.div>
            ))
        )}
      </div>
    </section>
  );
}
