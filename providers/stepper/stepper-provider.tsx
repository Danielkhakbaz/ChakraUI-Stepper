import { useReducer } from "react";
import { StepperReducer } from "./stepper-reducer";
import { StepperContext, StepperAction } from "./stepper-context";
import DateAndTime from "../../components/stepper/stepper-levels/date-and-time";
import Information from "../../components/stepper/stepper-levels/information";
import Overview from "../../components/stepper/stepper-levels/overview";

type Props = {
  children: React.ReactNode;
};

const StepperProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
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

  const [state, dispatch] = useReducer(StepperReducer, initialState);

  return (
    <>
      <StepperContext.Provider value={{ ...state }}>
        <StepperAction.Provider value={{ dispatch }}>
          {children}
        </StepperAction.Provider>
      </StepperContext.Provider>
    </>
  );
};

export default StepperProvider;
