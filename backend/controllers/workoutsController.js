const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

//Get all workouts
const getAllWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};

//Get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No workout with that id" });
  const workout = await Workout.findById(id);
  if (!id) {
    res.status(400).json({ error: "No workout found" });
  } else {
    res.status(200).json(workout);
  }
};

//Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, sets, load } = req.body;
  let emptyFields = [];
  if (!title) emptyFields.push("title");
  if (!reps) emptyFields.push("reps");
  if (!sets) emptyFields.push("sets");
  if (!load) emptyFields.push("load");

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: `Missing fields: ${emptyFields}` });
  }
  //add doc to db
  try {
    const workout = await Workout.create({ title, reps, sets, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json("Error: " + error.message);
  }
};

//Delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No workout with that id" });
  const workout = await Workout.findByIdAndDelete({ _id: id });

  if (!workout) {
    res.status(404).json({ error: "No workout found" });
  } else {
    res.status(200).json(workout);
  }
};

//Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No workout with that id" });
  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
