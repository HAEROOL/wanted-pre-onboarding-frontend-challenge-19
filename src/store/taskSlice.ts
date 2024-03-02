import { createSlice } from "@reduxjs/toolkit";

type Task = {
	id: number;
	taskName: string;
};
type InitialState = {
	nextId: number;
	tasks: Task[];
};
const initialState: InitialState = {
	nextId: 0,
	tasks: [],
};
export const taskSlice = createSlice({
	name: "taskEditor",
	initialState,
	reducers: {
		add: (state, action) => {
			state.tasks = [
				...state.tasks,
				{ id: state.nextId, taskName: action.payload },
			];
			state.nextId += 1;
		},
		remove: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id != action.payload);
		},
	},
});

export const { add, remove } = taskSlice.actions;
export default taskSlice.reducer;
