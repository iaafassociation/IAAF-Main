// Imports
import { Outlet } from "react-router-dom";
import Help from "./Help";
// import Consultation from "./Consultation";

export default function HelpLayout() {
  return (
    <div>
      <Outlet />
      {/* <Consultation /> */}
      <Help />
    </div>
  );
}
