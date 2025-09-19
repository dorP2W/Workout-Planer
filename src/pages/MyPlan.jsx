import React, { use, useContext } from 'react'
import { PlanCon } from '../context/planCon'
import { useNavigate } from 'react-router-dom'

function MyPlan() {
    const {plan} = useContext(PlanCon)
    const navigate = useNavigate();

  return (
    <div className='flex flex-col'>
        <h1 className='text-2xl'>Your workout plan is:</h1>
        {plan.map((day, i)=>(
            <div key={i} className='border-2 m-2 p-2 rounded-2xl'>
                <h1>Day {i+1}:</h1>
                {day.map((ex,j)=>(
                    <div key={j} className='flex flex-col'>
                    <h1>Exercise {j+1}: {ex.name}</h1>
                    <h1>sets: {ex.sets}</h1>
                    <h1>reps: {ex.reps}</h1>
                    <h1>-----------------------</h1>
                    </div>
                ))}
                <button className=" rounded-2xl w-1/4 px-4 py-2 bg-blue-600 m-2"
                 onClick={() => navigate(`/edit/${i}`)}
                >Edit Workout</button>
            </div>
        ))}
    </div>
  )
}

export default MyPlan