// Imports
import { useTranslation } from "react-i18next";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  // FieldProps,
} from "formik";
import * as Yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
// import { DatePicker } from "./DatePicker";

interface ValuesProps {
  name: string;
  bDate: string;
  education: string;
  job: string;
  college: string;
  university: string;
  gradYear: string;
  address: string;
  military: string;
  phone: string;
  email: string;
  experience: string;
}

const initialValues: ValuesProps = {
  name: "",
  bDate: "",
  education: "",
  job: "",
  college: "",
  university: "",
  gradYear: "",
  address: "",
  military: "",
  phone: "",
  email: "",
  experience: "",
};

export default function Works() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    values: ValuesProps,
    { resetForm }: FormikHelpers<ValuesProps>
  ) => {
    try {
      setLoading(true);
      console.log(values);
      const res = await fetch("https://iaaf.vercel.app/api/work", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        resetForm();
        toast.success(t("success.work"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // validation schema using yup
  const validationSchema = Yup.object({
    name: Yup.string().required(t("help.errors.name.required")),
    bDate: Yup.string().required(t("works.errors.bDate")),
    education: Yup.string().required(t("works.errors.education")),
    job: Yup.string().required(t("works.errors.job")),
    college: Yup.string().required(t("works.errors.college")),
    university: Yup.string().required(t("works.errors.university")),
    gradYear: Yup.string().required(t("works.errors.gradYear")),
    address: Yup.string().required(t("works.errors.address")),
    military: Yup.string().required(t("works.errors.military")),
    email: Yup.string()
      .email(t("help.errors.email.invalid"))
      .required(t("help.errors.email.required")),
    phone: Yup.string()
      .matches(/(012|010|011|015)\d{8}/, t("help.errors.phone.invalid"))
      .length(11, t("help.errors.phone.length"))
      .required(t("help.errors.phone.required")),
    experience: Yup.string().required(t("works.errors.experience")),

    // .length(11, t("complaints.errors.companyPhone.length")),
  });

  return (
    <section className="bg-[#E6E6E6] max-md:pt-16 max-md:pb-10 pt-28 pb-14 flex flex-col items-center">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-black max-md:text-base mb-14 max-md:mb-6"
      >
        {t("works.title")}
      </motion.h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-[430px] max-md:w-[206px]">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col mt-4 max-md:mt-0.5"
          >
            <Field
              type="text"
              name="name"
              placeholder={t("works.name")}
              className="outline-none max-md:h-[16px] max-md:p-1 max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
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
            className="flex flex-col mt-4 max-md:mt-2"
          >
            {/* <Field name="bDate">
              {({ field, form, meta }: FieldProps) => (
                <DatePicker
                  name={t("works.bDate")}
                  type="bDate"
                  field={field}
                  form={form}
                  meta={meta}
                />
              )}
            </Field> */}
            <Field
              type="text"
              name="bDate"
              placeholder={t("works.bDate")}
              className="outline-none max-md:h-[16px] max-md:p-1 max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
            />
            <ErrorMessage
              name="bDate"
              render={(msg) => (
                <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                  {msg}
                </p>
              )}
            />
          </motion.div>
          <div className="flex justify-between mt-4 max-md:mt-0.5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="education"
                placeholder={t("works.education")}
                className="outline-none max-md:h-[16px] max-md:p-1 w-[205px] max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="education"
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
                placeholder={t("works.job")}
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
                name="college"
                placeholder={t("works.college")}
                className="outline-none max-md:h-[16px] max-md:p-1 w-[205px] max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="college"
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
                name="university"
                placeholder={t("works.university")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="university"
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
            className="flex flex-col mt-4 max-md:mt-2"
          >
            {/* <Field name="gradYear">
              {({ field, form, meta }: FieldProps) => (
                <DatePicker
                  name={t("works.gradYear")}
                  type="gradYear"
                  field={field}
                  form={form}
                  meta={meta}
                />
              )}
            </Field> */}
            <Field
              type="text"
              name="gradYear"
              placeholder={t("works.gradYear")}
              className="outline-none max-md:h-[16px] max-md:p-1 max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
            />
            <ErrorMessage
              name="gradYear"
              render={(msg) => (
                <p className="text-red-700 w-1/2 text-xs max-md:text-[6px]/3">
                  {msg}
                </p>
              )}
            />
          </motion.div>
          <div className="flex justify-between mt-4 max-md:mt-0.5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Field
                type="text"
                name="address"
                placeholder={t("works.address")}
                className="outline-none max-md:h-[16px] max-md:p-1 w-[205px] max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="address"
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
                name="military"
                placeholder={t("works.military")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="military"
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
                placeholder={t("works.phone")}
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
                name="email"
                placeholder={t("works.email")}
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
              name="experience"
              placeholder={t("works.experience")}
              className="outline-none w-full h-[160px] max-md:p-1  max-md:h-[60px] max-md:text-[8px] resize-none text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
            />
            <ErrorMessage
              name="experience"
              render={(msg) => (
                <p className="text-red-700 text-xs max-md:text-[6px]/3">
                  {msg}
                </p>
              )}
            />
          </motion.div>
          <p className="mt-1.5 text-[#667299] max-md:text-xs">
            {t("works.empty")} <span className="text-red-700">*</span>
          </p>
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
