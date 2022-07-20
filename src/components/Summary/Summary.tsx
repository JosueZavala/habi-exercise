import { FC } from "react";
import styles from "../../../styles/Summary/summary.module.scss";
import { SummaryProps } from "../../../typings/typings";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Summary: FC<SummaryProps> = ({ state }) => {
  const { steps } = state;
  const floor = steps.floor <= 0 ? undefined : "true";
  const cost = steps.cost <= 0 ? undefined : "true";
  const elevator = typeof steps.elevator === "undefined" ? undefined : "true";

  return (
    <div className={styles.container}>
      <div className={styles.title}>Summary</div>
      <div className={styles.steps}>
        <div className={steps.name && styles.stepCompleted}>
          {steps.name && <AiOutlineCheckCircle />}
          Name
        </div>
        <div className={steps.email && styles.stepCompleted}>
          {steps.email && <AiOutlineCheckCircle />}
          Email
        </div>
        <div className={steps.address && styles.stepCompleted}>
          {steps.address && <AiOutlineCheckCircle />}
          Address
        </div>
        <div className={floor && styles.stepCompleted}>
          {floor && <AiOutlineCheckCircle />}
          Floor
        </div>
        <div className={steps.amenities && styles.stepCompleted}>
          {steps.amenities && <AiOutlineCheckCircle />}
          Amenities
        </div>
        <div className={steps.parking && styles.stepCompleted}>
          {steps.parking && <AiOutlineCheckCircle />}
          Parking
        </div>
        <div className={cost && styles.stepCompleted}>
          {cost && <AiOutlineCheckCircle />}
          Cost
        </div>
        <div className={steps.picture && styles.stepCompleted}>
          {steps.picture && <AiOutlineCheckCircle />}
          Picture
        </div>
        <div className={elevator && styles.stepCompleted}>
          {elevator && <AiOutlineCheckCircle />}
          Elevator
        </div>
      </div>
    </div>
  );
};

export default Summary;
