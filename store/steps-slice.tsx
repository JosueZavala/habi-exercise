import { createSlice } from "@reduxjs/toolkit";
import { STEPS, stepsState } from "../typings/typings";

const initialState: stepsState = {
  steps: {
    name: "",
    email: "",
    address: undefined,
    floor: 0,
    amenities: undefined,
    parking: undefined,
    cost: 0,
    picture: undefined,
    elevator: undefined,
    currentStep: STEPS.name,
  },
};

const stepsSlice = createSlice({
  name: "steps",
  initialState: initialState.steps,
  reducers: {
    updateCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    updateState(state, action) {
      const { newState, type } = action.payload;
      switch (type) {
        case STEPS.name:
          state.name = newState;
          break;
        case STEPS.email:
          state.email = newState;
          break;
        case STEPS.address:
          state.address = newState;
          break;
        case STEPS.floor:
          state.floor = newState;
          break;
        case STEPS.amenities:
          state.amenities = newState;
          break;
        case STEPS.parking:
          state.parking = newState;
          break;
        case STEPS.cost:
          state.cost = newState;
          break;
        case STEPS.picture:
          state.picture = newState;
          break;
        case STEPS.elevator:
          state.elevator = newState;
          break;

        default:
          break;
      }

      //SetLocal Storage
      const storageData =
        typeof newState === "object" ? JSON.stringify(newState) : newState;
      localStorage.setItem(type, storageData);
    },
  },
});

export const stepsActions = stepsSlice.actions;

export default stepsSlice;
