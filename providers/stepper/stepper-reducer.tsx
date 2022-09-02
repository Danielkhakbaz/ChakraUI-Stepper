import { Actions } from "./stepper-actions";
import { ActionType } from "../../types/stepper-context";

export const StepperReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case Actions.STEPPER: {
      return {
        ...state,
        stepsActions: action.payload,
      };
    }
    case Actions.SET_DATA: {
      const data = {
        ...state.data,
        userData: action.payload,
      };

      return {
        ...state,
        data,
      };
    }
    case Actions.SET_TIME: {
      const data = { ...state.data, time: action.payload };

      return {
        ...state,
        data,
      };
    }
    case Actions.SET_DATE: {
      const data = { ...state.data, date: action.payload };

      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
};
