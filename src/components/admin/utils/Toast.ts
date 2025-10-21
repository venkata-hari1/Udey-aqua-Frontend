import "react-toastify/dist/ReactToastify.css";
import {  Slide, toast } from "react-toastify";
export const showToast = (isSuccess: boolean, message: string) => {
    if (isSuccess) {
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme:'colored',
        style: {
          backgroundColor: "#0A4FA4", 
          color: "#fff", 
          fontSize: "14px",
          fontWeight: 600,
        },
        transition: Slide,
      });
    } else {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme:'colored',
        style: {
          fontSize: "14px",
          fontWeight: 600,
        },
        transition: Slide,
      
      });
    } 
  };
