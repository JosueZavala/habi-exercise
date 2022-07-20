import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../../styles/Steps/steps.module.scss";
import { EMAIL_REGEX, STEPS, stepsProps } from "../../../typings/typings";
import StepButton from "../UI/StepButton";

const Email: FC<stepsProps> = ({
  state,
  updateStepHandler = (newStep: string, newState?: string, type?: string) => {},
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm<any>();

  const handlePrevStep = () => {
    const email = watch("email");
    if (email) {
      updateStepHandler(STEPS.name, email, STEPS.email);
    } else {
      updateStepHandler(STEPS.name);
    }
  };

  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    const { email } = data;
    if (email) {
      updateStepHandler(STEPS.address, email, STEPS.email);
    }
  };

  useEffect(() => {
    if (state?.steps.email) {
      setValue("email", state.steps.email);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label>Email:</label>
      <input
        {...register("email", { required: true, pattern: EMAIL_REGEX })}
        type="email"
        className={styles.stepInput}
      />
      {errors.email && (
        <span>This field is required and must be a valid email</span>
      )}
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Next Step" />
      </div>
    </form>
  );
};

export default Email;
