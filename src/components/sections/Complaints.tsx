// Imports
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface ValuesProps {
  name: string;
  email: string;
  company: string;
  job: string;
  companyEmail: string;
  companyPhone: string;
  phone: string;
  whats: string;
  message: string;
}

const initialValues: ValuesProps = {
  name: "",
  email: "",
  company: "",
  job: "",
  companyEmail: "",
  companyPhone: "",
  phone: "",
  whats: "",
  message: "",
};

export default function Complaints() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    values: ValuesProps,
    { resetForm }: FormikHelpers<ValuesProps>
  ) => {
    try {
      setLoading(true);
      console.log(values);
      const res = await fetch("https://iaaf.vercel.app/api/complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        resetForm();
        toast.success(t("success.complaint"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // validation schema using yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t("help.errors.name.required"))
      .min(3, t("help.errors.name.length")),
    email: Yup.string()
      .email(t("help.errors.email.invalid"))
      .required(t("help.errors.email.required")),
    companyEmail: Yup.string()
      .email(t("help.errors.email.invalid"))
      .required(t("help.errors.email.required")),
    phone: Yup.string()
      .matches(/(012|010|011|015)\d{8}/, t("help.errors.phone.invalid"))
      .length(11, t("help.errors.phone.length"))
      .required(t("help.errors.phone.required")),
    whats: Yup.string()
      .matches(/(012|010|011|015)\d{8}/, t("help.errors.phone.invalid"))
      .length(11, t("help.errors.phone.length"))
      .required(t("help.errors.phone.required")),
    message: Yup.string()
      .required(t("complaints.errors.complaint.required"))
      .min(3, t("complaints.errors.complaint.length")),
    company: Yup.string()
      .required(t("complaints.errors.company.required"))
      .min(3, t("complaints.errors.company.length")),
    job: Yup.string()
      .required(t("complaints.errors.job.required"))
      .min(3, t("complaints.errors.job.length")),
    companyPhone: Yup.string().required(
      t("complaints.errors.companyPhone.required")
    ),
    // .length(11, t("complaints.errors.companyPhone.length")),
  });

  return (
    <section className="bg-[#E2E3E3] max-md:pt-16 max-md:pb-10 pt-28 pb-14 flex flex-col items-center">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-black max-md:text-base mb-14 max-md:mb-6"
      >
        {t("complaints.title")}
      </motion.h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-[430px] max-md:w-[206px]">
          <div className="flex justify-between mt-4 max-md:mt-0.5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="name"
                placeholder={t("help.name")}
                className="outline-none max-md:h-[16px] max-md:p-1 w-[205px] max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="email"
                placeholder={t("complaints.email")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
          </div>
          <div className="flex justify-between mt-4 max-md:mt-0.5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="company"
                placeholder={t("complaints.company")}
                className="outline-none max-md:h-[16px] max-md:p-1 w-[205px] max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="company"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="job"
                placeholder={t("complaints.job")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="job"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
          </div>
          <div className="flex justify-between mt-4 max-md:mt-0.5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="companyEmail"
                placeholder={t("complaints.companyEmail")}
                className="outline-none max-md:h-[16px] max-md:p-1 w-[205px] max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="companyEmail"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="companyPhone"
                placeholder={t("complaints.companyPhone")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="companyPhone"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
          </div>
          <div className="flex justify-between mt-4 max-md:mt-0.5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="phone"
                placeholder={t("complaints.phone")}
                className="outline-none max-md:h-[16px] max-md:p-1 w-[205px] max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="phone"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="whats"
                placeholder={t("complaints.whats")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="whats"
                render={(msg) => (
                  <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                    {msg}
                  </p>
                )}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 max-md:mt-2"
          >
            <Field
              type="text"
              as="textarea"
              name="message"
              placeholder={t("complaints.message")}
              className="outline-none w-full h-[160px] max-md:p-1  max-md:h-[60px] max-md:text-[8px] resize-none text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
            />
            <ErrorMessage
              name="message"
              render={(msg) => (
                <p className="text-red-700 text-xs max-md:text-[6px]/3">
                  {msg}
                </p>
              )}
            />
          </motion.div>
          {/* <p className="mt-1.5 text-[#667299] max-md:text-xs">
            <span className="text-red-700">*</span> {t("help.indication")}
          </p> */}
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            type="submit"
            disabled={loading}
            className={`${
              loading && "opacity-60"
            } mt-6 max-md:mt-3 w-[200px] max-md:w-[70px] py-3 max-md:py-1 text-sm max-md:text-xs font-semibold text-white bg-sec m-auto rounded-sm block`}
          >
            {t("help.submit")}
          </motion.button>
        </Form>
      </Formik>
    </section>
  );
}
