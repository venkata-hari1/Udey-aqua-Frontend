// src/App.tsx
import React from 'react'
import { Suspense } from 'react'
import Loading from "./components/Loading";
import "./App.css"  
import { ToastContainer } from 'react-toastify';
import 'react-quill-new/dist/quill.snow.css';
import { Provider } from 'react-redux';
import store from "./redux/store"

function App() {
  const AppRoutes=React.lazy(()=>import('./routes/AppRoutes'))
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
      <AppRoutes />
      <ToastContainer/>
      {/*<Map/>*/}
    </Suspense>
    </Provider>
  )
} 

export default App