import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

const store = configureStore({
	reducer: { taskEditor: taskSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
