import { useSelector } from "react-redux";
import TaskAdder from "../TaskAdder";
import Task from "../task";
import styles from "./list.module.scss";
import { RootState } from "../../store/store";

export default function List() {
	const tasks = useSelector((state: RootState) => state.taskEditor.tasks);
	return (
		<section className={styles["todo-list"]}>
			<div>
				<TaskAdder />
				<ul className={styles["todo-list__list"]}>
					{tasks.map((task) => (
						<Task task={task} key={task.id} />
					))}
				</ul>
			</div>
		</section>
	);
}
