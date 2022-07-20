import { FC, useEffect } from "react";
import styles from "../../../styles/Steps/steps.module.scss";
import {
  Amenities,
  Parking,
  STEPS,
  stepsProps,
} from "../../../typings/typings";
import { useForm, SubmitHandler } from "react-hook-form";
import StepButton from "../UI/StepButton";

const ParkingStep: FC<stepsProps> = ({
  state,
  updateStepHandler = (
    newStep: string,
    newState?: Parking,
    type?: string
  ) => {},
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm<any>();

  const handlePrevStep = () => {
    const parking = watch();
    updateStepHandler(STEPS.amenities, parking, STEPS.parking);
  };

  const onSubmit: SubmitHandler<Parking> = (data) => {
    updateStepHandler(STEPS.cost, data, STEPS.parking);
  };

  useEffect(() => {
    if (state?.steps.parking) {
      const { parking } = state.steps;
      setValue("included", parking.included);
      setValue("covered", parking.covered);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.title}>Parking</label>
      <div className={styles.checkBoxes}>
        <label className={styles.stepCheckbox}>
          <input {...register("included")} type="checkbox" />
          Included
        </label>
        {watch("included") && (
          <label className={styles.stepCheckbox}>
            <input {...register("covered")} type="checkbox" />
            Covered
          </label>
        )}
      </div>
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Next Step" />
      </div>
    </form>
  );
};

export default ParkingStep;
