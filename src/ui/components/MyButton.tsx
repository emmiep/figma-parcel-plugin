import styles from "./MyButton.module.css";
import type { ButtonHTMLAttributes } from "react";

export type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function MyButton(props: MyButtonProps) {
  return <button {...props} className={styles.button} />;
}
