import { useDispatch } from "react-redux";
import CommonButton from "../CommonButton";
import styles from "./TaskAdder.module.scss";
import { useRef } from "react";
import { add } from "../../store/taskSlice";
export default function TaskAdder() {
	const dispatch = useDispatch();
	const taskName = useRef<HTMLInputElement>(null);
	const addTask = () => {
		if (taskName.current) {
			console.log(taskName.current.value);
			dispatch(add(taskName.current.value));
			taskName.current.value = "";
		}
	};
	return (
		<div className={styles.adder}>
			<input className={styles.adder__input} ref={taskName} />
			<CommonButton content="Add" clickEvent={addTask} />
		</div>
	);
}
