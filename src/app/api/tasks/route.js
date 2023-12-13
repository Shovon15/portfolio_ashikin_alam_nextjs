import { connectDb } from "@/dbConfig/dbConfig";
import Task from "@/models/taskModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
	try {
		connectDb();
		const reqBody = await request.json();
		const { name, desc } = reqBody;
		// console.log(reqBody);

		const newTask = new Task({
			taskName: name,
			taskDescription: desc,
		});

		const savedTask = await newTask.save();
		// console.log(savedTask);

		const response = NextResponse.json({
			message: "Task save successfully",
			success: true,
			payload: {
				reqBody,
			},
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
