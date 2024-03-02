import { useDispatch } from "react-redux";
import CommonButton from "../CommonButton";
import styles from "./TaskAdder.module.scss";
import { useRef } from "react";
import { add } from "../../store/taskSlice";
export default function TaskAdder() {
	const dispatch = useDispatch();
	const taskName = useRef<HTMLInputElement>(null);
	const addTask = () => {
		if (taskName.current && taskName.current.value !== "") {
			dispatch(add(taskName.current.value));
			taskName.current.value = "";
		}
	};
	const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			addTask();
		}
	};
	return (
		<div className={styles.adder}>
			<input
				className={styles.adder__input}
				ref={taskName}
				onKeyUp={pressEnter}
			/>
			<CommonButton content="Add" clickEvent={addTask} />
		</div>
	);
}
