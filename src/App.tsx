import React from 'react'
import { Suspense } from 'react'
import Loading from "./components/Loading";
import "./App.css"  
import TrainingPrograms from './components/admin/userEnd-web/userEnd-TrainingPrograms/TrainingPrograms';

function App() {
  const AppRoutes=React.lazy(()=>import('./routes/AppRoutes'))

  return (
    <Suspense fallback={<Loading />}>
      {/*<AppRoutes />*/}
      <TrainingPrograms/>
    </Suspense>
  )
}

export default App