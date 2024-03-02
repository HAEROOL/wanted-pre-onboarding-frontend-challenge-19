import CommonButton from "../CommonButton";
import styles from "./task.module.scss";
interface TaskProps {
	task: {
		id: number;
		taskName: string;
	};
}
export default function Task({ task }: TaskProps) {
	return (
		<li className={styles.task}>
			<span className={styles.task__name}>{task.taskName}</span>
			<CommonButton content="Delete" />
		</li>
	);
}
