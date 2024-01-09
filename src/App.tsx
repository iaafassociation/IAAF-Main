// Imports
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Module Imports
import Layout from "./components/sections/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Factories from "./pages/Factories";
import Services from "./pages/Services";
import HelpLayout from "./components/sections/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<HelpLayout />}>
        <Route index element={<Home />} />
        <Route path="guide" element={<Factories />} />
        <Route path="about" element={<About />} />
        <Route path="members" element={<Members />} />
      </Route>

      <Route path="services" element={<Services />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
