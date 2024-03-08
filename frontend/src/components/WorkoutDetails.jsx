/* eslint-disable react/prop-types */
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/workouts/` + workout._id,
        {
          method: "DELETE",
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: json });
      } else {
        console.error("Error deleting workout:", json);
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong> Load (lbs)</strong> {workout.load}
      </p>
      <p>
        <strong> Sets</strong> {workout.sets}
      </p>
      <p>
        <strong> Reps</strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
