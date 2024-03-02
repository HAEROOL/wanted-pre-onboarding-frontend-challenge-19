import { useDispatch } from "react-redux";
import CommonButton from "../CommonButton";
import styles from "./task.module.scss";
import { remove } from "../../store/taskSlice";
interface TaskProps {
	task: {
		id: number;
		taskName: string;
	};
}
export default function Task({ task }: TaskProps) {
	const dispatch = useDispatch();
	const removeTask = () => {
		dispatch(remove(task.id));
	};
	return (
		<li className={styles.task}>
			<span className={styles.task__name}>{task.taskName}</span>
			<CommonButton content="Delete" clickEvent={removeTask} />
		</li>
	);
}
