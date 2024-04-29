// import * as React from "react";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { FieldProps } from "formik";

// export function DatePicker({
//   field,
//   form,
//   name,
//   type,
// }: FieldProps & { name: string; type: string }) {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           variant={"outline"}
//           className="outline-none max-md:h-[16px] max-md:p-1 focus:shadow-none max-md:text-[6px]/3 text-[#A3AAC2] text-lg border border-[#E0E3EB] bg-white rounded-sm p-1.5"
//         >
//           <CalendarIcon className="mr-2 rtl:ml-2 md:h-4 md:w-4 w-2 h-2" />
//           {field.value ? (
//             format(field.value, type === "bDate" ? "dd/MM/yyyy" : "yyyy")
//           ) : (
//             <span>{name}</span>
//           )}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0">
//         <Calendar
//           mode="single"
//           selected={field.value}
//           onSelect={(e) => {
//             // console.log(e);
//             const date = new Date();
//             date.setFullYear(new Date(String(e)).getFullYear());

//             console.log(date);
//             form.values[type] = type === "bDate" ? e : date;
//             form.validateForm();
//           }}
//           initialFocus
//         />
//       </PopoverContent>
//     </Popover>
//   );
// }
