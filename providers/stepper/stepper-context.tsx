import { createContext, useContext } from "react";
import DateAndTime from "../../components/stepper/stepper-levels/date-and-time";
import Information from "../../components/stepper/stepper-levels/information";
import Overview from "../../components/stepper/stepper-levels/overview";

type DataType = {
  time: string;
  date: string;
  userData: {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
};
type StepsType = {
  label: string;
  content?: JSX.Element;
};
type StepperContextType = {
  data: DataType;
  steps: Array<StepsType>;
  stepsActions: any;
};
type StepperActionType = {
  dispatch?: any;
};

export const StepperContextValue: StepperContextType = {
  data: {
    time: "",
    date: "",
    userData: { name: "", lastName: "", email: "", phoneNumber: "" },
  },
  steps: [
    { label: "تاریخ و زمان", content: <DateAndTime /> },
    { label: "اطلاعات", content: <Information /> },
    { label: "تأیید نهایی", content: <Overview /> },
  ],
  stepsActions: [],
};
export const StepperActionValue: StepperActionType = {
  dispatch: "",
};

export const StepperContext = createContext(StepperContextValue);
export const StepperAction = createContext(StepperActionValue);

export const useStepperContext = () => useContext(StepperContext);
export const useStepperAction = () => useContext(StepperAction);
