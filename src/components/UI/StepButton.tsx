import { FC } from "react";
import styles from "../../../styles/Steps/steps.module.scss";
import { ButtonProps } from "../../../typings/typings";

const StepButton: FC<ButtonProps> = ({
  text,
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button onClick={onClick} type={type} className={styles.stepButton}>
      {text}
    </button>
  );
};
export default StepButton;
