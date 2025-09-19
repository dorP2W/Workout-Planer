import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Planworkout from './pages/Planworkout';
import { PlanCon } from './context/planCon';
import MyPlan from './pages/MyPlan';
import UpdateWo from './assets/UpdateWo'

function App() {
  const [plan, setPlan] = useState([])

  return (
    <PlanCon.Provider value={{plan, setPlan}}>
    <div className="p-6 ">
      {/* Navigation */}
      <nav className="space-x-4 border-2 border-amber-200 p-2 mb-6">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/planWorkout" className="text-blue-500">Create WO</Link>
        <Link to="/myPlan" className="text-blue-500">My Plan</Link>
      </nav>

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/planWorkout' element={<Planworkout/>}/>
        <Route path='/myPlan' element={<MyPlan/>}/>
        <Route path="/edit/:dayIndex" element={<UpdateWo />} />
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </PlanCon.Provider>
  )
}
function NotFound() {
  return <h1 className="text-red-500 text-xl">404 - Page Not Found</h1>;
}

export default App
