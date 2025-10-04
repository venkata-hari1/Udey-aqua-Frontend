import React from 'react'
import { Suspense } from 'react'
import Loading from "./components/Loading";
import "./App.css"  

function App() {
  const AppRoutes=React.lazy(()=>import('./routes/AppRoutes'))

  return (
    <Suspense fallback={<Loading />}>
      <AppRoutes />
    </Suspense>
  )
}

export default App