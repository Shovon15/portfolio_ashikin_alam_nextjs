const { Schema, model } = require("mongoose");

const taskModel = new Schema({
	taskName: {
		type: String,
		required: [true, "Please provide a  task name"],
	},
	taskDescription: {
		type: String,
		required: [true, "Please provide a description"],
	},
});
const Task = model("tasks", taskModel);
export default Task;
