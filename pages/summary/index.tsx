import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/summaryPage.module.scss";
import { STEPS, stepsState } from "../../typings/typings";

const Summary = () => {
  const stepsState = useSelector((state: stepsState) => state);

  console.log(stepsState.steps.amenities?.bbqZone);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.contentCards}>
          <div className={styles.summaryCard}>
            <div className={styles.title}>Summary</div>
            <div className={styles.label}>Name</div>
            <div className={styles.stepInfo}>{stepsState.steps.name}</div>
            <div className={styles.label}>Email</div>
            <div className={styles.stepInfo}>{stepsState.steps.email}</div>
            <div className={styles.label}>Address</div>
            <div className={styles.stepAddress}>
              Direction: {stepsState.steps.address?.direction}
            </div>
            <div className={styles.stepAddress}>
              Zip Code: {stepsState.steps.address?.zipCode}
            </div>
            <div className={styles.stepAddress}>
              City : {stepsState.steps.address?.city}
            </div>
            <div className={styles.stepInfo}>
              Direction: {stepsState.steps.address?.country}
            </div>

            <div className={styles.label}>
              Floor:{" "}
              <span className={styles.stepInfo}>{stepsState.steps.floor}</span>
            </div>

            <div className={styles.labelAmenities}>Amenities</div>
            <div className={styles.stepAmenities}>
              BBQ Zone:{" "}
              {stepsState.steps.amenities?.bbqZone && <span>Yes</span>}
              {!stepsState.steps.amenities?.bbqZone && <span>No</span>}
            </div>
            <div className={styles.stepAmenities}>
              Common Area:{" "}
              {stepsState.steps.amenities?.commonArea && <span>Yes</span>}
              {!stepsState.steps.amenities?.commonArea && <span>No</span>}
            </div>
            <div className={styles.stepAmenities}>
              Gaming Park:{" "}
              {stepsState.steps.amenities?.gamingPark && <span>Yes</span>}
              {!stepsState.steps.amenities?.gamingPark && <span>No</span>}
            </div>

            <div className={styles.labelParking}>Parking</div>
            <div className={styles.stepParking}>
              Included: {stepsState.steps.parking?.included && <span>Yes</span>}
              {!stepsState.steps.parking?.included && <span>No</span>}
            </div>
            <div className={styles.stepParking}>
              Covered: {stepsState.steps.parking?.covered && <span>Yes</span>}
              {!stepsState.steps.parking?.covered && <span>No</span>}
            </div>

            <div className={styles.label}>
              Cost:{" "}
              <span className={styles.stepInfo}>
                USD$ {stepsState.steps.cost}
              </span>
            </div>
            <div className={styles.label}>
              Picture:{" "}
              <span className={styles.stepInfo}>
                {stepsState.steps.picture?.name}
              </span>
            </div>
            <div className={styles.label}>
              Elevator:{" "}
              <span className={styles.stepInfo}>
                {stepsState.steps?.elevator && <span>Yes</span>}
                {!stepsState.steps?.elevator && <span>No</span>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
