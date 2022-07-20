import { GetStaticProps } from "next";

import { useSelector, useDispatch } from "react-redux";
import { stepsActions } from "../../store/steps-slice";
import { useRouter } from "next/router";
import Email from "../../src/components/steps/EmailStep";
import Name from "../../src/components/steps/NameStep";
import styles from "../../styles/Steps/steps.module.scss";
import {
  Address,
  Amenities,
  Parking,
  PATHS,
  Picture,
  STEPS,
  stepsState,
} from "../../typings/typings";
import AddressStep from "../../src/components/steps/AddressStep";
import Floor from "../../src/components/steps/FloorStep";
import AmenitiesStep from "../../src/components/steps/AmenitiesStep";
import ParkingStep from "../../src/components/steps/ParkingStep";
import Cost from "../../src/components/steps/CostStep";
import PictureStep from "../../src/components/steps/PictureStep";
import Elevator from "../../src/components/steps/ElevatorStep";
import Summary from "../../src/components/Summary/Summary";
import { useEffect } from "react";

const Steps = () => {
  const router = useRouter();
  const stepsState = useSelector((state: stepsState) => state);

  const dispatch = useDispatch();
  const { step } = router.query;

  const updateStepHandler = (
    newStep?: string,
    newState?:
      | string
      | number
      | boolean
      | Address
      | Amenities
      | Parking
      | Picture,
    type?: string
  ) => {
    dispatch(stepsActions.updateCurrentStep(newStep));
    if (typeof newState !== "undefined" && type) {
      dispatch(stepsActions.updateState({ newState, type }));
    }
    if (newStep) {
      router.push(newStep);
    }
  };

  let content;
  switch (step) {
    case STEPS.name:
      content = (
        <Name state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;
    case STEPS.email:
      content = (
        <Email state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;
    case STEPS.address:
      content = (
        <AddressStep state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;
    case STEPS.floor:
      content = (
        <Floor state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;
    case STEPS.amenities:
      content = (
        <AmenitiesStep
          state={stepsState}
          updateStepHandler={updateStepHandler}
        />
      );
      break;
    case STEPS.parking:
      content = (
        <ParkingStep state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;
    case STEPS.cost:
      content = (
        <Cost state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;
    case STEPS.picture:
      content = (
        <PictureStep state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;
    case STEPS.elevator:
      content = (
        <Elevator state={stepsState} updateStepHandler={updateStepHandler} />
      );
      break;

    default:
      break;
  }

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedAddress = localStorage.getItem("address");
    const storedFloor = localStorage.getItem("floor");
    const storedAmenities = localStorage.getItem("amenities");
    const storedParking = localStorage.getItem("parking");
    const storedCost = localStorage.getItem("cost");
    const storedPicture = localStorage.getItem("picture");
    const storedElevator = localStorage.getItem("elevator");

    let nextStep = STEPS.name;
    if (storedName) {
      nextStep = STEPS.email;
      updateStepHandler("", storedName, STEPS.name);
    }
    if (storedEmail) {
      nextStep = STEPS.address;
      updateStepHandler("", storedEmail, STEPS.email);
    }
    if (storedAddress) {
      nextStep = STEPS.floor;
      const address: Address = JSON.parse(storedAddress);
      updateStepHandler("", address, STEPS.address);
    }
    if (storedFloor) {
      nextStep = STEPS.amenities;
      updateStepHandler("", storedFloor, STEPS.floor);
    }
    if (storedAmenities) {
      nextStep = STEPS.parking;
      const amenities: Amenities = JSON.parse(storedAmenities);
      updateStepHandler("", amenities, STEPS.amenities);
    }
    if (storedParking) {
      nextStep = STEPS.cost;
      const parking: Parking = JSON.parse(storedParking);
      updateStepHandler("", parking, STEPS.parking);
    }
    if (storedCost) {
      nextStep = STEPS.picture;
      updateStepHandler("", storedCost, STEPS.cost);
    }
    if (storedPicture) {
      nextStep = STEPS.elevator;
      const picture: Picture = JSON.parse(storedPicture);
      updateStepHandler("", picture, STEPS.picture);
    }
    if (storedElevator) {
      updateStepHandler("", storedElevator, STEPS.elevator);
    }

    updateStepHandler(nextStep);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.contentCards}>
          <div className={styles.stepCard}>{content}</div>
          <div className={styles.summaryCard}>
            <Summary state={stepsState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: PATHS.map((path) => {
      return {
        params: {
          step: path,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const step = context.params?.step;

  return {
    props: {
      stepData: {
        step,
      },
    },
  };
};

export default Steps;
