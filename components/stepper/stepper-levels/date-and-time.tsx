import moment from "jalali-moment";
import { Flex, Button, Stack, RadioGroup, Radio } from "@chakra-ui/react";
import { ConfigProvider } from "antd";
import { DatePicker, JalaliLocaleListener } from "antd-jalali";
import { RangePickerProps } from "antd/es/date-picker";
import fa_IR from "antd/lib/locale/fa_IR";
import {
  useStepperContext,
  useStepperAction,
} from "../../../providers/stepper/stepper-context";
import { Actions } from "../../../providers/stepper/stepper-actions";
import "antd/dist/antd.css";

const DateAndTime: React.FC = () => {
  const { stepsActions } = useStepperContext();
  const { dispatch } = useStepperAction();

  const { activeStep, prevStep, nextStep } = stepsActions;

  const times = ["11", "13", "15", "17", "19", "21", "23"];

  const disabledDate: RangePickerProps["disabledDate"] = (current: any) => {
    return current && current < moment().startOf("day");
  };

  return (
    <>
      <Flex width="100%" justifyContent="space-between" paddingY={10} mx="10">
        <Flex width="50%">
          <ConfigProvider locale={fa_IR} direction="rtl">
            <JalaliLocaleListener />
            <DatePicker
              className="hi"
              disabledDate={disabledDate}
              onChange={(e: { $d: any }) =>
                dispatch({
                  type: Actions.SET_DATE,
                  payload: moment(e.$d).locale("fa").format("YYYY/M/D"),
                })
              }
            />
          </ConfigProvider>
        </Flex>
        <Flex width="50%" gap={5}>
          <RadioGroup>
            <Stack direction="row" gap={4}>
              {times.map((time: string) => (
                <Radio
                  key={time}
                  value={time}
                  onChange={() => {
                    dispatch({ type: Actions.SET_TIME, payload: time });
                  }}
                >
                  {time}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Flex>
      </Flex>
      <Flex width="100%" justifyContent="center" gap={6}>
        {activeStep !== 0 && (
          <Button onClick={prevStep} size="md" colorScheme="gray">
            بازگشت
          </Button>
        )}
        <Button size="md" type="submit" onClick={nextStep} colorScheme="red">
          گام بعدی
        </Button>
      </Flex>
    </>
  );
};

export default DateAndTime;
