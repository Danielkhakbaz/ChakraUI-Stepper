import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  useStepperContext,
  useStepperAction,
} from "../../providers/stepper/stepper-context";
import { Actions } from "../../providers/stepper/stepper-actions";

const Stepper = () => {
  const { steps, stepsActions } = useStepperContext();
  const { dispatch } = useStepperAction();

  const { activeStep } = stepsActions;

  const stepsByDefault = useSteps({
    initialStep: 0,
  });

  useEffect(() => {
    dispatch({ type: Actions.STEPPER, payload: stepsByDefault });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, stepsByDefault.activeStep]);

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} colorScheme="red" size="md">
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
    </Flex>
  );
};

export default Stepper;
