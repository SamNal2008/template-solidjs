import styles from "../../../App.module.css";
import { JSXElement } from "solid-js";

interface InputErrorProps {
  message?: string;
}

export default (props: InputErrorProps): JSXElement => {
  return <span class={styles["input-error"]}>{props.message}</span>;
};
