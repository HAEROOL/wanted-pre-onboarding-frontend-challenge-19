import CommonButton from "../CommonButton";
import styles from "./TaskAdder.module.scss";
export default function TaskAdder() {
	return (
		<div className={styles.adder}>
			<input className={styles.adder__input} />
			<CommonButton content="Add" />
		</div>
	);
}
