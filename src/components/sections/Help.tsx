// Imports
import { useTranslation } from "react-i18next";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  // FieldProps,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

// Module Imports
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { useState } from "react";
import toast from "react-hot-toast";

interface ValuesProps {
  name: string;
  email: string;
  reason: string;
  phone: string;
  message: string;
}

const initialValues: ValuesProps = {
  name: "",
  email: "",
  reason: "",
  phone: "",
  message: "",
};

export default function Help() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    values: ValuesProps,
    { resetForm }: FormikHelpers<ValuesProps>
  ) => {
    try {
      setLoading(true);
      console.log(values);
      const res = await fetch("https://iaaf.vercel.app/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        resetForm();
        toast.success(t("success.help"));
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
    reason: Yup.string().required(t("help.errors.reason")),
    phone: Yup.string()
      .matches(/(012|010|011|015)\d{8}/, t("help.errors.phone.invalid"))
      .length(11, t("help.errors.phone.length"))
      .required(t("help.errors.phone.required")),
    message: Yup.string()
      .required(t("help.errors.message.required"))
      .min(3, t("help.errors.message.length")),
  });

  return (
    <section className="bg-[#E2E3E3] max-md:pb-10 pb-14 pt-10 flex flex-col items-center">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-black max-md:text-base mb-14 max-md:mb-6"
      >
        {t("help.title")}
      </motion.h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-[430px] max-md:w-[206px]">
          <div className="flex justify-between">
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
                placeholder={t("help.email")}
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
              {/* <Field type="text" name="reason">
                {({ field, form }: FieldProps) => (
                  <Select
                    defaultValue={field.value}
                    onValueChange={(st) => {
                      form.values.reason = st;
                      form.validateForm();
                    }}
                  >
                    <SelectTrigger
                      dir={i18n.language === "ar" ? "rtl" : "ltr"}
                      onBlur={field.onBlur}
                      className="outline-none max-md:h-[16px] max-md:p-1  focus:shadow-none w-[205px] max-md:w-[100px] max-md:text-[6px]/3 text-[#A3AAC2] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5"
                    >
                      <SelectValue placeholder={t("help.reason")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="cursor-pointer" value="Reason 1">
                        Reason 1
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Reason 2">
                        Reason 2
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Reason 3">
                        Reason 3
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </Field> */}
              <Field
                type="text"
                name="reason"
                placeholder={t("help.reason")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
              />
              <ErrorMessage
                name="reason"
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
                name="phone"
                placeholder={t("help.phone")}
                className="outline-none max-md:h-[16px] w-[205px] max-md:p-1  max-md:w-[100px] max-md:text-[8px] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
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
              placeholder={t("help.message")}
              className="outline-none w-full h-[100px] max-md:p-1  max-md:h-[60px] max-md:text-[8px] resize-none text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5 placeholder:text-[#A3AAC2]"
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
            } hover:opacity-70 transition-opacity duration-300 mt-6 max-md:mt-3 w-[200px] max-md:w-[70px] py-3 max-md:py-1 text-sm max-md:text-xs font-semibold text-white bg-sec m-auto rounded-sm block`}
          >
            {t("help.submit")}
          </motion.button>
        </Form>
      </Formik>
    </section>
  );
}
