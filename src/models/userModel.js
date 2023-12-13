import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "name is required"],
		},
		email: {
			type: String,
			required: [true, "email is required"],
			trim: true,
			unique: true,
			lowercase: true,
			validate: {
				validator: function (v) {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: "Please enter a valid email",
			},
		},
		password: {
			type: String,
			required: [true, "password is required"],
			trim: true,
			minLength: [6, "password should be minimum 6 charectures"],
			set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = models.users || model("users", userSchema);

export default User;
