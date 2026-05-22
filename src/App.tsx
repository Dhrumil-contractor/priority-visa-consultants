import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CountriesPage from "./pages/Countries";
import PackagesPage from "./pages/Tour-packages";
import StoriesPage from "./pages/Success-stories";
import CounsellingPage from "./pages/free-counselling";

export default function App() {
  const location = useLocation();
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/tour-packages" element={<PackagesPage />} />
          <Route path="/success-stories" element={<StoriesPage />} />
          <Route path="/free-counselling" element={<CounsellingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}
