// src/App.tsx
import React from 'react'
import { Suspense } from 'react'
import Loading from "./components/Loading";
import "./App.css"  
import { ToastContainer } from 'react-toastify';
import 'react-quill-new/dist/quill.snow.css';


function App() {
  const AppRoutes=React.lazy(()=>import('./routes/AppRoutes'))

  return (
    <Suspense fallback={<Loading />}>
      <AppRoutes />
      <ToastContainer/>
    </Suspense>
  )
} 

export default App