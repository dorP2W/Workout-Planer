import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    const goToPlan=()=>{
        navigate("/planWorkout")
    };


    return(
        <div className="flex items-center flex-col h-1/2">
            <h1 class="text-2xl text-gray-500 ">Welcome!</h1>
            <p className="text-2xl mb-2">
            This project is designed for trainers and 
            trainees <br /> to plan their gym workouts, with constant 
            <br />access for viewing, editing,
             and updating to<br /> ensure maximum efficiency.
            </p>

            <h1 class="text-gray-500 ">Lets plan your first workout</h1>
            <button
            onClick={goToPlan}
            className=" text-2xl rounded-2xl w-1/3 px-4 py-2 bg-blue-600 m-2"
            >Plan Workout</button>
        </div>
    )

}

export default Home;