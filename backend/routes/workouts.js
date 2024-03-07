const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutsController");

//Get all workouts
router.get("/", getAllWorkouts);

//Get a workout by id
router.get("/:id", getWorkout);

//Create a new workout
router.post("/", createWorkout);

//Delete a workout by id
router.delete("/:id", deleteWorkout);

//Update a workout by id
router.patch("/:id", updateWorkout);

module.exports = router;
