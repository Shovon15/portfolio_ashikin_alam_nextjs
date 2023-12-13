import mongoose from "mongoose";

export const conntectDb = async () => {
	try {
		await mongoose.connect(
			process.env.MONGO_URI ||
				"mongodb+srv://ashikinPortfolio:XFzIVk5FrnyUPP3y@cluster0.o5a9jb9.mongodb.net/ashikin_Portfolio"
		);
		const connection = mongoose.connection;
		connection.on("connected", () => {
			console.log("mongoDb connected successfully.");
		});
		connection.on("error", (error) => {
			console.log("mongoDb connection error", "error");
			process.exit();
		});
	} catch (error) {
		console.log(error);
		console.log("something went wrong to connect database");
	}
};
