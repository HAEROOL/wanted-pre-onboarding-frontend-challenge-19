import styles from "./CommonButton.module.scss";

interface CommonButtonProps {
	content: string;
	event?: () => void;
}
export default function CommonButton({ content }: CommonButtonProps) {
	return <button className={styles.button}>{content}</button>;
}
