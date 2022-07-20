type CallbackFunction = () => void;
type Type = "submit" | "button";

export type LayoutProps = {
  children: JSX.Element;
};

export type ButtonProps = {
  text: string;
  type?: Type;
  onClick?: CallbackFunction;
};

export type SummaryProps = {
  state: stepsState;
};

export type stepsProps = {
  state?: stepsState;
  updateStepHandler: (
    newStep: string,
    newState?:
      | string
      | number
      | boolean
      | Address
      | Amenities
      | Parking
      | Picture,
    type?: string
  ) => void;
  prevStep?: CallbackFunction;
};

export type Address = {
  direction: string;
  zipCode: string;
  city: string;
  country: string;
};

export type Amenities = {
  bbqZone: boolean;
  commonArea: boolean;
  gamingPark: boolean;
};

export type Parking = {
  included: boolean;
  covered: boolean;
};

export type Picture = {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

export type stepsState = {
  steps: {
    name: string;
    email: string;
    address: Address | undefined;
    floor: number;
    amenities: Amenities | undefined;
    parking: Parking | undefined;
    cost: number;
    picture: Picture | undefined;
    elevator: boolean | undefined;
    currentStep: string;
  };
};

export const STEPS = {
  name: "name",
  email: "email",
  address: "address",
  floor: "floor",
  amenities: "amenities",
  parking: "parking",
  cost: "cost",
  picture: "picture",
  elevator: "elevator",
  summary: "summary",
};

export const PATHS = [
  "name",
  "email",
  "address",
  "floor",
  "amenities",
  "parking",
  "cost",
  "picture",
  "elevator",
  "summary",
];

export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
