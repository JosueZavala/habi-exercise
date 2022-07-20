import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { STEPS, stepsProps } from "../../../typings/typings";
import styles from "../../../styles/Steps/steps.module.scss";
import StepButton from "../UI/StepButton";

const Name: FC<stepsProps> = ({
  state,
  updateStepHandler = (newStep: string, newState?: string, type?: string) => {},
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm<any>();

  const onSubmit: SubmitHandler<{ name: string }> = (data) => {
    const { name } = data;
    if (name) {
      updateStepHandler(STEPS.email, name, STEPS.name);
    }
  };

  useEffect(() => {
    if (state?.steps.name) {
      setValue("name", state.steps.name);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name:</label>
      <input
        {...register("name", { required: true })}
        type="text"
        className={styles.stepInput}
      />
      {errors.name && <span>This field is required</span>}
      <StepButton type="submit" text="Next Step" />
    </form>
  );
};

export default Name;
