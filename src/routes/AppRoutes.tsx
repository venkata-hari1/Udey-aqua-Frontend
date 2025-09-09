import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import CulturesLayout from "../components/userflow/Cultures/CulturesLayout";
import SeaBass from "../components/userflow/Cultures/SeaBass";
import PearlSpot from "../components/userflow/Cultures/PearlSpot";
import MudCrab from "../components/userflow/Cultures/MudCrab";
import Murrel from "../components/userflow/Cultures/Murrel";
import Tilapia from "../components/userflow/Cultures/Tilapia";
import SeaWeed from "../components/userflow/Cultures/SeaWeed";
import TechnologiesLayout from "../components/userflow/Technologies/TechnologiesLayout";
import RAS from "../components/userflow/Technologies/RAS";
import CAS from "../components/userflow/Technologies/CAS";
import PondFarming from "../components/userflow/Technologies/PondFarming";
import FishHatchery from "../components/userflow/Technologies/FishHatchery";
import CageCulture from "../components/userflow/Technologies/CageCulture";
import TrainingProgramsLayout from "../components/userflow/TrainingPrograms/TrainingProgramsLayout";
import NewsEventsLayout from "../components/userflow/NewsEvents/NewsEventsLayout";
import SuccessStories from "../components/userflow/NewsEvents/SuccessStories";
import News from "../components/userflow/NewsEvents/News";
import Videos from "../components/userflow/NewsEvents/Videos";
import Gallery from "../components/userflow/NewsEvents/Gallery";
import Awards from "../components/userflow/NewsEvents/Awards";
import Blog from "../components/userflow/NewsEvents/Blog";
import Contact from "../components/userflow/Contact/Contact";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

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
        </Route>
        <Route path="/about/testimonials" element={<Testimonials />} />
        <Route path="/about/milestones" element={<Milestones />} />
        <Route path="training-programs" element={<TrainingProgramsLayout />} />
        <Route path="news-events" element={<NewsEventsLayout />}>
          <Route index element={<SuccessStories />} />
          <Route path="news" element={<News />} />
          <Route path="videos" element={<Videos />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="awards" element={<Awards />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="cultures" element={<CulturesLayout />}>
          <Route index element={<SeaBass />} />
          <Route path="pearl-spot" element={<PearlSpot />} />
          <Route path="mud-crab" element={<MudCrab />} />
          <Route path="murrel" element={<Murrel />} />
          <Route path="tilapia" element={<Tilapia />} />
          <Route path="sea-weed" element={<SeaWeed />} />
        </Route>
        <Route path="technologies" element={<TechnologiesLayout />}>
          <Route index element={<RAS />} />
          <Route path="cas" element={<CAS />} />
          <Route path="pond-farming" element={<PondFarming />} />
          <Route path="fish-hatchery" element={<FishHatchery />} />
          <Route path="cage-culture" element={<CageCulture />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
