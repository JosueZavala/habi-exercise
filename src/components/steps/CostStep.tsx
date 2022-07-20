import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../../styles/Steps/steps.module.scss";
import { STEPS, stepsProps } from "../../../typings/typings";
import StepButton from "../UI/StepButton";

const Cost: FC<stepsProps> = ({
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
    const cost = watch("cost");
    if (cost) {
      updateStepHandler(STEPS.parking, cost, STEPS.cost);
    } else {
      updateStepHandler(STEPS.parking);
    }
  };

  const onSubmit: SubmitHandler<{ cost: number }> = (data) => {
    const { cost } = data;
    if (cost) {
      updateStepHandler(STEPS.picture, cost, STEPS.cost);
    }
  };

  useEffect(() => {
    if (state?.steps.cost) {
      setValue("cost", state.steps.cost);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label>Cost</label>
      <div className={styles.costContainer}>
        <div className={styles.currencyLabel}>$USD</div>

        <input
          {...register("cost", { required: true, min: 1 })}
          type="number"
          className={styles.stepInput}
          min={1}
        />
      </div>
      {errors.cost && <span>This field is required</span>}
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Next Step" />
      </div>
    </form>
  );
};

export default Cost;
