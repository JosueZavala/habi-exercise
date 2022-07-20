import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../../styles/Steps/steps.module.scss";
import { STEPS, stepsProps } from "../../../typings/typings";
import StepButton from "../UI/StepButton";

const Floor: FC<stepsProps> = ({
  state,
  updateStepHandler = (newStep: string, newState?: number, type?: string) => {},
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm<any>();

  const handlePrevStep = () => {
    const floor = watch("floor");
    if (floor) {
      updateStepHandler(STEPS.address, floor, STEPS.floor);
    } else {
      updateStepHandler(STEPS.address);
    }
  };

  const onSubmit: SubmitHandler<{ floor: number }> = (data) => {
    const { floor } = data;
    if (floor) {
      updateStepHandler(STEPS.amenities, floor, STEPS.floor);
    }
  };

  useEffect(() => {
    if (state?.steps.floor) {
      setValue("floor", state.steps.floor);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label>Floor</label>
      <input
        {...register("floor", { required: true, min: 1, max: 50 })}
        type="number"
        className={styles.stepInput}
        max={50}
        min={1}
      />
      {errors.floor && (
        <span>This field is required and must be at least 1</span>
      )}
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Next Step" />
      </div>
    </form>
  );
};

export default Floor;
