import styles from "./CommonButton.module.scss";

interface CommonButtonProps {
	content: string;
	clickEvent: () => void;
}
export default function CommonButton({
	content,
	clickEvent,
}: CommonButtonProps) {
	return (
		<button className={styles.button} onClick={clickEvent}>
			{content}
		</button>
	);
}
