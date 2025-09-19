import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlanCon } from "../context/planCon";
import exercisesList from "./exList";

function UpdateWo() {
  const { dayIndex } = useParams();
  const { plan, setPlan } = useContext(PlanCon);
  const navigate = useNavigate();

  // Clone the day being edited so we can change it locally
  const [exercises, setExercises] = useState([...plan[dayIndex]]);

  const handleChange = (i, field, value) => {
    const updated = exercises.map((ex, idx) =>
      idx === i ? { ...ex, [field]: value } : ex
    );
    setExercises(updated);
  };

const handleSave = () => {
    // Update plan in context
    setPlan((prev) =>
      prev.map((day, i) => (i === Number(dayIndex) ? exercises : day))
    );
    navigate("/"); // go back to plan page
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Edit Day {Number(dayIndex) + 1}</h1>

      {exercises.map((ex, i) => (
        <div key={ex.id || i} className="mb-4 border p-2 rounded">
          {/* exercise name */}
                    <select
                        value={ex.name}
                        onChange={(e) =>
                        handleChange(i , "name", e.target.value)
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
          <input
            type="number"
            value={ex.sets}
            onChange={(e) => handleChange(i, "sets", Number(e.target.value))}
            placeholder="Sets"
            className="border p-1 mr-2 w-16"
          />
          <input
            type="number"
            value={ex.reps}
            onChange={(e) => handleChange(i, "reps", Number(e.target.value))}
            placeholder="Reps"
            className="border p-1 w-16"
          />
        </div>
      ))}

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}


export default UpdateWo