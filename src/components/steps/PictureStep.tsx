import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../../styles/Steps/steps.module.scss";
import { Picture, STEPS, stepsProps } from "../../../typings/typings";
import StepButton from "../UI/StepButton";

const PictureStep: FC<stepsProps> = ({
  state,
  updateStepHandler = (
    newStep: string,
    newState?: Picture,
    type?: string
  ) => {},
}) => {
  const [image, setImage] = useState("");
  const { handleSubmit, register, watch, setValue } = useForm<any>();

  const handlePrevStep = () => {
    const { image } = watch();
    console.log(image);
    if (image.length > 0) {
      const {
        lastModified,
        lastModifiedDate,
        name,
        size,
        type,
        webkitRelativePath,
      } = image[0];

      const picture: Picture = {
        lastModified,
        lastModifiedDate,
        name,
        size,
        type,
        webkitRelativePath,
      };
      updateStepHandler(STEPS.cost, picture, STEPS.picture);
    } else {
      updateStepHandler(STEPS.cost);
    }
  };

  const onSubmit: SubmitHandler<{ image: any }> = (data) => {
    const { image } = data;
    if (image.length > 0) {
      const {
        lastModified,
        lastModifiedDate,
        name,
        size,
        type,
        webkitRelativePath,
      } = image[0];

      const picture: Picture = {
        lastModified,
        lastModifiedDate,
        name,
        size,
        type,
        webkitRelativePath,
      };
      updateStepHandler(STEPS.elevator, picture, STEPS.picture);
    } else {
      updateStepHandler(STEPS.elevator);
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const addedFiles: any = event.target.files;

    const file = addedFiles[0];
    const formData = new FormData();
    const name = file?.name || "-";
    formData.append("file", file, name);

    setImage(name);
  };

  useEffect(() => {
    if (state?.steps.picture) {
      setValue("image", state.steps.picture);
    }
  }, [state]);

  return (
    <form className={styles.stepForm} onSubmit={handleSubmit(onSubmit)}>
      <label>Image</label>
      <input
        id="file-upload"
        {...register("image")}
        className={styles.fileInput}
        onChange={handleFileUpload}
        type="file"
        accept=".png, .jpeg"
      />
      <div className={styles.buttonsContainer}>
        <StepButton text="Prev Step" onClick={handlePrevStep} />
        <StepButton type="submit" text="Next Step" />
      </div>
    </form>
  );
};

export default PictureStep;
