import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "ar",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          home: "Home",
          about: "About Us",
          members: "Board of Directors",
          guide: "Factories Guide",
          services: "Other Services",
          error: "Something went wrong, Please try again",
          consultation: {
            title: "Free consultation with high quality",
            phone: "Only call us on:",
            fax: "Fax : 4500220",
            button: "Get your consultation",
          },
          footer: {
            title: "Contact Us",
            address: {
              title: "Address",
              text: "29.5 km, General Authority for Investment and Free Zones Building, Alexandria-Cairo Desert Road",
            },
            phone: "Phone",
            email: "Email",
            face: "Facebook",
            socials: "Socials",
            subscribe: "subscribe",
            loading: "Sending...",
            copyright:
              "Investors Association of Alexandria © 2023. All Rights Reserved",
            madeBy: "Made By",
          },
          help: {
            title: "How can we help you",
            name: "Your Name",
            email: "Email",
            reason: "Reason for Contacting",
            phone: "Phone",
            message: "Message",
            submit: "Submit",
            indication: "indicates a required field",
            errors: {
              name: {
                required: "Name is Required",
                length: "Name must be more than 3 characters",
              },
              email: {
                required: "Email is Required",
                invalid: "Invalid Email",
              },
              reason: "Reason is Required",
              phone: {
                required: "Phone Number is Required",
                invalid: "Invalid Phone Number",
                length: "Phone Number must be 11 Numbers",
              },
              message: {
                required: "Message is Required",
                length: "Message must be more than 3 characters",
              },
            },
          },
          events: {
            news: "Association News",
            button: "Read More...",
          },
          aboutTitle: {
            one: "The General Vision",
            two: "The history, goals, and activities of the Association",
          },
          aboutDescription: {
            main: "The vision is to contribute to enhancing economic development and job opportunities by supporting communication with foreign and domestic investments and increasing cooperation opportunities between free zones across the republic. It also aims to support local partnerships to increase cooperation opportunities, based on building a strong and sustainable relationship to maximize the economic and social benefits for society.",
            one: "The Investors Association in the Alexandria Free Zone was established and announced in 1997. It is a non-governmental and non-profit organization.",
            two: "The Association aims to build a bridge of trust and be a link between government entities and projects operating in the Free Zone by holding continuous meetings with all relevant parties to facilitate concepts, encourage investment, and remove obstacles.",
            three:
              "The Association has worked on the sponsorship of a guide that brings together all projects to support communication and cooperation among them, serving cooperation with service providers and suppliers operating in the local market. The first guide was issued in 1998-1999, and subsequent editions followed in 2008-2009, in accordance with continuous updates.",
            four: "Additionally, the Association is responsible for sending all publications, decisions, and relevant information regarding the Free Zones' work to investors to provide support and facilitate access to information.",
            five: "The Association also collaborates with unions, chambers, and institutions related to activities supporting economic development.",
            six: "It studies legislation and coordinates and consults with relevant entities to examine problems that conflict with the workflow.",
            seven:
              "The Association strives to establish an advanced training center to serve various sectors of work and provide training and consultations for new companies or those in need of advice and technical support.",
          },
          servicesTitle: {
            one: "Services Of The Free Zone Investors Association",
            two: "Join the Association",
          },
          servicesSubTitle: {
            one: "Types of membership",
            two: "Joining the membership",
          },
          servicesDesc: {
            join: "To join the membership please add your email and we will contact you as soon as possible",
            title: {
              one: "Active member",
              two: "Affiliated member",
              // three: "العضو الفخري",
              // four: "The applicant must meet the following conditions",
            },
            desc: {
              one: "He has the right to attend the general assembly, nominate for the board membership, and attend all announced association meetings except the board meetings.",
              two: "He has all the rights of an active member and all his obligations, except the right to attend the general assembly and nominate for the board membership.",
              // three: "هو الذي يقدم خدمات جليلة للجمعية سواء كانت مادية أو معنوية وليس له حق الترشيح لعضوية مجلس الادارة أو حضور الجمعية العمومية",
              four: "The membership application form must be filled in Arabic and English, along with a personal photo, proof of identity, and passport copy.",
              five: "After the board's approval, your approval to pay the membership fees will be announced.",
              six: "And start benefiting from the services provided by the association.",
              // seven:
              //   "The board of directors reserves the right to accept or reject any applicant.",
            },
          },
          complaints: {
            title: "Complaints and Suggestions",
            email: "Personal Email",
            company: "Company",
            job: "Job",
            companyEmail: "Company Email",
            companyPhone: "Company Phone",
            phone: "Phone Number",
            whats: "Whatsapp",
            message: "Content",
            errors: {
              complaint: {
                required: "Complaint is Required",
                length: "Complaint must be more than 3 characters",
              },
              company: {
                required: "Company is Required",
                length: "Company must be more than 3 characters",
              },
              job: {
                required: "Job is Required",
                length: "Job must be more than 3 characters",
              },
              companyPhone: {
                required: "هاتف الشركة مطلوب",
                // length: "الشكوى يجب ان تزيد عن ٣ احرف",
              },
            },
          },
          membersPage: {
            title: "Board of Directors Members",
            director: "Chairman of the Board",
            general: "Secretary General",
            deputy: "Vice Chairman of the Board",
            cash: "Treasurer",
          },
          guideTitle: "Factories",
          search: "Search",
          more: "More",
          noMore: "No More Data",
          loading: "Loading...",
          success: {
            help: "Message sent successfully",
            complaint: "complaint sent successfully",
            subscribe: "Email sent successfully",
          },
        },
      },
      ar: {
        translation: {
          // here we will place our translations...
          home: "الرئيسية",
          about: "عن الجمعية",
          members: "اعضاء مجلس الادارة",
          guide: "دليل المشروعات",
          services: "خدمات اخرى",
          error: "حدث خطأ، يرجى المحاولة مرة أخرى",
          consultation: {
            title: "استشارة مجانية بجودة استثنائية",
            phone: "فقط مكالمة عبر :",
            fax: "فاكس : 4500220",
            button: "احصل على استشارتك",
          },
          footer: {
            title: "تواصل معنا",
            address: {
              title: "العنوان",
              text: "الكيلو 29,5 مبني الهيئة العامة للاستثمار و المناطق الحرة طريق الاسكندرية الفاهرة الصحراوي",
            },
            phone: "الهاتف",
            email: "الايميل",
            face: "الفيسبوك",
            socials: "مواقع التواصل",
            subscribe: "اشترك",
            loading: "جاري الارسال...",
            copyright: "جمعية مستثمري الإسكندرية © 2023. جميع الحقوق محفوظة",
            madeBy: "تم إنشاؤه بواسطة",
          },
          help: {
            title: "بماذا يمكننا مساعدتك",
            name: "الاسم",
            email: "الايميل",
            reason: "سبب التواصل",
            phone: "الهاتف",
            message: "الرسالة",
            submit: "ارسال",
            indication: "يشير الى خانة مطلوبة",
            errors: {
              name: {
                required: "الاسم مطلوب",
                length: "الاسم يجب ان يزيد عن ٣ احرف",
              },
              email: {
                required: "الايميل مطلوب",
                invalid: "ايميل غير صالح",
              },
              reason: "السبب مطلوب",
              phone: {
                required: "الهاتف مطلوب",
                invalid: "رقم هاتف غير صحيح",
                length: "رقم الهاتف يجب ان يكون ١١ حرف",
              },
              message: {
                required: "الرسالة مطلوبة",
                length: "الرسالة يجب ان تزيد عن ٣ احرف",
              },
            },
          },
          events: {
            news: "أخبار الجمعية",
            button: "اقرأ المزيد...",
          },
          aboutTitle: {
            one: "الرؤية العامة",
            two: "تاريخ الجمعية وأهدافها وأنشطتها ",
          },
          aboutDescription: {
            main: "المساهمة في تعزيز التنمية الاقتصادية وتعزيز فرص العمل من خلال دعم التواصل مع الاستثمار الخارجي والداخلي وزيادة فرص التعاون بين المناطق الحرة علي مستوي الجمهورية ، ودعم الشراكة المحلية لزيادة فرص التعاون وفق بناء علاقة قوية مستدامة لتعظيم الفوائد الاقتصادية والاجتماعية للمجتمع .",
            one: "تأسست وأُشهرت جمعية المستثمرين بالمنطقة الحرة الاسكندرية عام 1997 وهي كيان غير حكومي وغير هادف للربح. ",
            two: "تهدف الجمعية لبناء جسر  ثقة وأن تكون حلقة وصل بين الجهات الحكومية والمشروعات العاملة بالمنطقة الحرة  من خلال اقامة اللقاءات المستمرة مع كافة الجهات المعنية لتقريب المفاهيم لتشجيع الاستثمار وإزالة العقبات .",
            three:
              "عملت علي رعاية دليل يجمع كافة المشروعات لدعم التواصل والتعاون فيما بينهم ويخدم التعاون مع مقدمي الخدمات والموردين المتعاملين من السوق المحلي حيث صدر أول دليل سنة 1998 – 1999وتوالت الاصدارات  -2008-2009  وفق التحديثات المستمرة.  ",
            four: "كما تقوم الجمعية بخدمة ارسال كافة المنشورات والقرارات وما يرد من الجهات ذات الصلة بعمل المناطق الحرة  للمستثمرين للافادة ودعم وصول المعلومة .",
            five: "إضافة لتعاون الجمعية مع الاتحادات والغرف والمؤسسات ذات الصلة بالانشطة لدعم التنمية الاقتصادية .",
            six: "ودراسة التشريعات والتنسيق والتشاور مع الجهات المعنية لدراسة المشكلات التي تتعارض مع سير العمل .",
            seven:
              "و تسعي الجمعية لانشاء مركز تدريب متطور لخدمة قطاعات العمل المختلفة وتقديم التدريب والاستشارات للشركات الحديثة أو التي تحتاج للمشورة والدعم الفني.",
          },
          servicesTitle: {
            one: "خدمات جمعية المستثمرين بالمنطقة الحرة",
            two: "الانضمام للجمعية",
          },
          servicesSubTitle: {
            one: "انواع العضوية",
            two: "الانضمام للعضوية",
          },
          servicesDesc: {
            join: "للانضمام للجمعية يرجى ادخال الايميل الخاص بك و سيتم التواصل معك في اقرب وقت",
            title: {
              one: "العضو العامل",
              two: "العضو المنتسب",
              // three: "العضو الفخري",
              // four: "يجب أن يتوافر في مقدم الطلب الشروط التالية",
            },
            desc: {
              one: "له حق حضور الجمعية العمومية وحق الترشيح لعضوية مجلس الإدارة وحضور كافة اجتماعات الجمعية المعلن عنها باستثناء مجلس الادارة .",
              two: "ويكون للعضو المنتسب جميع حقوق العضو العامل وعليه جميع إلتزاماته، وذلك عدا حق حضور الجمعية العمومية والترشيح لعضوية مجلس الإدارة",
              // three: "هو الذي يقدم خدمات جليلة للجمعية سواء كانت مادية أو معنوية وليس له حق الترشيح لعضوية مجلس الادارة أو حضور الجمعية العمومية",
              four: "يجب أن يملئ استمارة طلب العضوية باللغة العربية والانجليزية  وصورة شخصية وصورة إثبات الشخصية وجواز السفر .",
              five: "بعد موافقه مجلس الادارة يتم اعلان سيادتكم بالموافقه لسداد رسوم العضوية .",
              six: "وبدء الاستفادة من الخدمات التي تقدمها الجمعية  .",
              // seven:
              //   "مجلس الادارة يحتفظ لنفسه بالحق في قبول أو رفض أي متقدم . ",
            },
          },
          complaints: {
            title: "شكاوي ومقترحات",
            email: "الايميل الشخصي",
            company: "الشركة",
            job: "الوظيفة",
            companyEmail: "ايميل  الشركة",
            companyPhone: "تليفون الشركة",
            phone: "رقم الموبايل",
            whats: "رقم الواتساب",
            message: "المحتوى",
            errors: {
              complaint: {
                required: "الشكوى مطلوبة",
                length: "الشكوى يجب ان تزيد عن ٣ احرف",
              },
              company: {
                required: "الشركة مطلوبة",
                length: "الشركة يجب ان تزيد عن ٣ احرف",
              },
              job: {
                required: "الوظيفة مطلوبة",
                length: "الوظيفة يجب ان تزيد عن ٣ احرف",
              },
              companyPhone: {
                required: "هاتف الشركة مطلوب",
                // length: "الشكوى يجب ان تزيد عن ٣ احرف",
              },
            },
          },
          membersPage: {
            title: "اعضاء مجلس الادارة",
            director: "رئيس مجلس الادارة",
            general: "الأمين العام",
            deputy: " نائب رئيس مجلس الادارة",
            cash: "أمين الصندوق",
          },
          guideTitle: "المشاريع",
          search: "ابحث",
          more: "المزيد",
          noMore: "لا يوجد بيانات اخرى",
          loading: "جاري التحميل...",
          success: {
            help: "تم ارسال الرسالة بنجاح",
            complaint: "تم ارسال الشكوى بنجاح",
            subscribe: "تم ارسال الميل بنجاح",
          },
        },
      },
    },
  });

export default i18n;
