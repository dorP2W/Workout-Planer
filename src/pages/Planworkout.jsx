import { use, useContext, useEffect, useState } from "react";
import { PlanCon } from "../context/planCon";
import exercisesList from "../assets/exList";


function Planworkout(){
    const [selected , setSelected] = useState("");
    const [exercise, setExercise] = useState([]);
    const {plan, setPlan} = useContext(PlanCon)

    const handleChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        // create array of objects [{id: 1, name: ""}, ...]
        const newExercises = Array.from({ length: value }, (_, i) => ({
        id: i + 1,
        name: "",
        reps: 0,
        sets: 0,
        }));
        setExercise(newExercises);
    };
    // update a specific exercise
    const handleExerciseChange = (id, field, newValue) => {
    setExercise((prev) =>
      prev.map((ex) =>
        ex.id === id ? { ...ex, [field]: newValue } : ex
    ))};
    function addW(){
        setPlan([...plan, exercise])
        console.log(plan)
    }

    return(
        <div className=" flex flex-col">
            <h1 className="text-red-600">WORKOUT PLANNER!</h1>
            <div>
                how many exercise you want to do?
            </div>
            <div>
                <select
                id="numbers"
                value={selected}
                onChange={handleChange}
                className="border rounded px-2 py-1"
            >
                <option value="">-- Select --</option>
                {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
                ))}
                </select>
            </div>
            {exercise.map((ex,i)=>(
                <div key={i} className="m-2 flex flex-col gap-1">
                    <p className="font-semibold">Exercise {ex.id}</p>

                    {/* exercise name */}
                    <select
                        value={ex.name}
                        onChange={(e) =>
                        handleExerciseChange(ex.id, "name", e.target.value)
                        }
                        className="border w-60 rounded px-2 py-1 mr-2"
                    >
                        <option value="">Choose exercise</option>
                        {exercisesList.map((group, i) => (
                            <optgroup key={i} label={group.category}>
                            {group.items.map((ex) => (
                                <option key={ex.value} value={ex.value}>
                                {ex.label}
                                </option>
                            ))}
                            </optgroup>
                        ))}
                    </select>
            <div>
            Reps:    {/* reps */}
          <input
            type="number"
            placeholder="Reps"
            value={ex.reps}
            onChange={(e) =>
              handleExerciseChange(ex.id, "reps", Number(e.target.value))
            }
            className="border rounded px-2 py-1 w-20 mr-2"
          /></div>
        <div>
          Sets: {/* sets */}
          <input
            type="number"
            placeholder="Sets"
            value={ex.sets}
            onChange={(e) =>
              handleExerciseChange(ex.id, "sets", Number(e.target.value))
            }
            className="border rounded px-2 py-1 w-20"
          /></div>
                </div>
            ))}
        <button className="text-2xl rounded-2xl w-1/3 px-4 py-2 bg-blue-600 m-2"
            onClick={addW}
            >Add Workout</button>
        </div>
    )
}

export default Planworkout;