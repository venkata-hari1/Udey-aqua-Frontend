import { Routes, Route } from "react-router-dom";
import Layout from "../components/userflow/Shared/Layout";
import AboutLayout from "../components/userflow/About/AboutLayout";
import Home from "../components/userflow/Home/Home";
import WhoWeAre from "../components/userflow/About/WhoWeAre";
import OurHistory from "../components/userflow/About/OurHistory";
import OurTeam from "../components/userflow/About/OurTeam";
import SustainableDevelopment from "../components/userflow/About/SustainableDevelopment";
import Careers from "../components/userflow/About/Careers";
import Milestones from "../components/userflow/About/Milestones";
import Testimonials from "../components/userflow/About/Testimonials";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<WhoWeAre />} />
          <Route path="our-history" element={<OurHistory />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route
            path="sustainable-development"
            element={<SustainableDevelopment />}
          />
          <Route path="careers" element={<Careers />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>
        <Route path="/about/milestones" element={<Milestones />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
