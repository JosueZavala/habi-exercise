import { FC, useEffect } from "react";
import styles from "../../../styles/Steps/steps.module.scss";
import { Address, STEPS, stepsProps } from "../../../typings/typings";
import { useForm, SubmitHandler } from "react-hook-form";
import StepButton from "../UI/StepButton";

const AddressStep: FC<stepsProps> = ({
  state,
  updateStepHandler = (
    newStep: string,
    newState?: Address,
    type?: string
  ) => {},
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    clearErrors,
    setValue,
  } = useForm<any>();

  const handlePrevStep = () => {
    clearErrors();
    const address = watch();
    const { direction, zipCode, city, country } = address;
    if (direction || zipCode || city || country) {
      updateStepHandler(STEPS.email, address, STEPS.address);
    } else {
      updateStepHandler(STEPS.email);
    }
  };

  const onSubmit: SubmitHandler<Address> = (data) => {
    const { direction, zipCode, city, country } = data;
    if (direction || zipCode || city || country) {
      updateStepHandler(STEPS.floor, data, STEPS.address);
    }
  };

  useEffect(() => {
    if (state?.steps.address) {
      const { address } = state.steps;
      setValue("direction", address.direction);
      setValue("zipCode", address.zipCode);
      setValue("city", address.city);
      setValue("country", address.country);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.title}>Address</label>
      <label className={styles.stepLabel}>Direction:</label>
      <input
        {...register("direction", { required: true })}
        id="direction"
        type="text"
        maxLength={60}
        className={styles.stepInput}
      />
      {errors.direction && <span>This field is required</span>}
      <label className={styles.stepLabel}>Zip Code:</label>
      <input
        {...register("zipCode", { required: true })}
        id="zipCode"
        type="text"
        maxLength={5}
        className={styles.stepInput}
      />
      {errors.zipCode && <span>This field is required</span>}
      <label className={styles.stepLabel}>City:</label>
      <input
        {...register("city", { required: true })}
        id="city"
        type="text"
        maxLength={40}
        className={styles.stepInput}
      />
      {errors.city && <span>This field is required</span>}
      <label className={styles.stepLabel}>Contry:</label>
      <input
        {...register("country", { required: true })}
        id="country"
        type="text"
        maxLength={40}
        className={styles.stepInput}
      />
      {errors.country && <span>This field is required</span>}
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Next Step" />
      </div>
    </form>
  );
};

export default AddressStep;
