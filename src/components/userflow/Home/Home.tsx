// src/components/userflow/Home/Home.tsx
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Hero from "./Hero";
import NewsAndBlogs from "./NewsAndBlogs";
import OurMotto from "./OurMotto";
import OurProjects from "./OurProjects";
import Partners from "./Partners";
import Pricing from "./Pricing";
import Team from "./Team";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <>
          <Hero />
          <Partners />
          <OurMotto />
          <AboutUs />
          <OurProjects />
          <Testimonials />
          <NewsAndBlogs />
          <Pricing />
          <Team />
          <Contact />
        </>
    )
}

export default Home;