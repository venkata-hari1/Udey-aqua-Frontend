import { Routes, Route, Navigate } from "react-router-dom";
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
import UserendTestimonials from "../components/admin/userEnd-web/userEndHome/UserendTestimonials";
import UserendNewsEvents from "../components/admin/userEnd-web/userEndHome/UserendNewsEvents";
import UserendPricing from "../components/admin/userEnd-web/userEndHome/UserendPricing";
import UserendDirectors from "../components/admin/userEnd-web/userEndHome/UserendDirectors";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>

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
      </Route>
         
          <Route path="userend-test" element={<UserendTestimonials/>} />
          <Route path="addnews" element={<UserendNewsEvents/>} />
          <Route path="price" element={<UserendPricing />} />
            <Route path="director" element={<UserendDirectors />} />
      
      
    <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
