import TaskAdder from "../TaskAdder";
import Task from "../task";
import styles from "./list.module.scss";
const DUMMY = [
	{ id: 1, taskName: "todo1" },
	{ id: 2, taskName: "todo2" },
	{ id: 3, taskName: "todo3" },
	{ id: 4, taskName: "todo4" },
];
export default function List() {
	return (
		<section className={styles["todo-list"]}>
			<div>
				<TaskAdder />
				<ul className={styles["todo-list__list"]}>
					{DUMMY.map((task) => (
						<Task task={task} />
					))}
				</ul>
			</div>
		</section>
	);
}
