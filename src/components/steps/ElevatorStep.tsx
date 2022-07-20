import { FC } from "react";
import styles from "../../../styles/Steps/steps.module.scss";
import { Parking, STEPS, stepsProps } from "../../../typings/typings";
import { useForm, SubmitHandler } from "react-hook-form";
import StepButton from "../UI/StepButton";

const Elevator: FC<stepsProps> = ({
  updateStepHandler = (
    newStep: string,
    newState?: boolean,
    type?: string
  ) => {},
}) => {
  const { handleSubmit, register, watch } = useForm<any>();

  const handlePrevStep = () => {
    const elevator = watch();
    updateStepHandler(STEPS.picture, elevator, STEPS.elevator);
  };

  const onSubmit: SubmitHandler<{ elevator: boolean }> = (data) => {
    console.log(data.elevator);
    updateStepHandler(STEPS.summary, data.elevator, STEPS.elevator);
  };

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.title}>Elevator</label>
      <div className={styles.checkBoxes}>
        <label className={styles.stepCheckbox}>
          <input {...register("elevator")} type="checkbox" />
          Elevator
        </label>
      </div>
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Summary" />
      </div>
    </form>
  );
};

export default Elevator;
