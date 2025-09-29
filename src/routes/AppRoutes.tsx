import { useEffect } from "react";
import { Navigate, useLocation, Routes, Route } from "react-router-dom";
import Layout from "../components/userflow/Shared/Layout";
import Home from "../components/userflow/Home/Home";
import Login from "../components/admin/auth/login";
import ForgotPassword from "../components/admin/auth/forgotpassword";
import OTP from "../components/admin/auth/otp";
import ChangePassword from "../components/admin/auth/changepassword";
import Trainingprograms from "../components/admin/user-management/Trainingprograms";
import MainLayout from "../components/admin/dashboard/MainLayout";
import Admindb from "../components/admin/dashboard/Admindb";
import UserInformation from "../components/admin/user-management/UserInformation";
import GetintouchUsers from "../components/admin/user-management/GetintouchUsers";
import Subscriber from "../components/admin/user-management/Subscriber";
import Profile from "../components/admin/profile/Profile";
import UserEndweb from "../components/admin/userEnd-web/UserEndweb";
import UserEndHome from "../components/admin/userEnd-web/userEndHome/UserEndHome";
import Logout from "../components/admin/auth/Logout";
import CultureHome from "../components/admin/userEnd-web/userEnd-Cultures/CultureHome";
//user
import Layout from "../components/userflow/Shared/Layout";
import Home from "../components/userflow/Home/Home";
import AboutUs from "../components/admin/userEnd-web/userEnd-Aboutus/AboutUs";
import Addsubpage from "../components/admin/userEnd-web/userEnd-Aboutus/AddsubPage";
const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.search) {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
        {/* User Routes */}
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<WhoWeAre />} />
          <Route path="our-history" element={<OurHistory />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="our-team/:memberSlug" element={<OurTeam />} />
          <Route path="sustainable-development" element={<SustainableDevelopment />} />
          <Route path="careers" element={<Careers />} />
          <Route path="milestones" element={<Milestones />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>
        <Route path="training-programs" element={<TrainingProgramsLayout />} />
        <Route path="maps" element={<Maps />} />
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
      

     {/* admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/forgotpassword" element={<ForgotPassword />} />
      <Route path="/admin/otp" element={<OTP />} />
      <Route path="/admin/changepassword" element={<ChangePassword />} />

      {/* <Route path="/admin" element={<DashboardLayout />}> 
        <Route path="dashboard" element={<Dashboard />} />
      </Route> */}

      <Route path="/admin" element={<MainLayout />}>
        <Route path="dashboard" element={<Admindb />}/>
        <Route path="user-management" element={<Trainingprograms />} />
        <Route path="user-management/training-registrations" element={<Trainingprograms />} />
        <Route path="user-management/user-info" element={<UserInformation />} />  
        <Route path="user-management/training-registrations/user-info" element={<UserInformation />} />
        <Route path="user-management/getin-touch" element={<GetintouchUsers />}/>
        <Route path="user-management/subscriber" element={<Subscriber />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="userend-web" element={<UserEndweb />}/>
        <Route path="userend-web/userend-home" element={<UserEndHome />} />
        <Route path="userend-web/userend-aboutus" element={<AboutUs/>}/>
        <Route path='userend-web/userend-aboutus/subpage' element={<Addsubpage/>}/>
        <Route path="userend-web/userend-culture" element={<CultureHome />} />        
        
        <Route path="logout" element={<Logout />} />  
      </Route>

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
