import { FC, useEffect } from "react";
import styles from "../../../styles/Steps/steps.module.scss";
import { Amenities, STEPS, stepsProps } from "../../../typings/typings";
import { useForm, SubmitHandler } from "react-hook-form";
import StepButton from "../UI/StepButton";

const AmenitiesStep: FC<stepsProps> = ({
  state,
  updateStepHandler = (
    newStep: string,
    newState?: Amenities,
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
    const amenities = watch();
    updateStepHandler(STEPS.floor, amenities, STEPS.amenities);
  };

  const onSubmit: SubmitHandler<Amenities> = (data) => {
    updateStepHandler(STEPS.parking, data, STEPS.amenities);
  };

  useEffect(() => {
    if (state?.steps.amenities) {
      const { amenities } = state.steps;
      setValue("bbqZone", amenities.bbqZone);
      setValue("commonArea", amenities.commonArea);
      setValue("gamingPark", amenities.gamingPark);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.title}>Amenities</label>
      <div className={styles.checkBoxes}>
        <label className={styles.stepCheckbox}>
          <input {...register("bbqZone")} type="checkbox" />
          BBQ Zone
        </label>
        <label className={styles.stepCheckbox}>
          <input {...register("commonArea")} type="checkbox" />
          Common Area
        </label>
        <label className={styles.stepCheckbox}>
          <input {...register("gamingPark")} type="checkbox" />
          Gaming Park
        </label>
      </div>
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Next Step" />
      </div>
    </form>
  );
};

export default AmenitiesStep;
