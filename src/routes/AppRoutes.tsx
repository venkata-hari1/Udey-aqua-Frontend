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
import { Pagination } from "@mui/material";
import MyPagination from "../components/admin/utils/MyPagination";

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
        <Route path="user-management/subscriber" element={<GetintouchUsers />}/>
      </Route>
       <Route path="page" element={<MyPagination />}/>
      
    <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
