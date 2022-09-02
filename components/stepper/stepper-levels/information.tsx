import { Formik, Field, FormikProps, FormikErrors } from "formik";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import {
  useStepperContext,
  useStepperAction,
} from "../../../providers/stepper/stepper-context";
import { Actions } from "../../../providers/stepper/stepper-actions";

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const Information: React.FC = () => {
  const { stepsActions } = useStepperContext();
  const { dispatch } = useStepperAction();

  const { activeStep, prevStep, nextStep } = stepsActions;

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
        }: FormikProps<FormValues>) => (
          <form>
            <Flex justifyContent="center" gap={6} paddingY={2}>
              <FormControl isRequired isInvalid={!!errors.name && touched.name}>
                <FormLabel htmlFor="name" fontSize={14}>
                  نام
                </FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  validate={(value: string) => {
                    let error: FormikErrors<string> = "";

                    if (!value) {
                      error = "فیلد را پر کنید!";
                    }

                    return error;
                  }}
                />
                <FormErrorMessage fontSize={12}>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={!!errors.lastName && touched.lastName}
              >
                <FormLabel htmlFor="lastName" fontSize={14}>
                  نام خانوادگی
                </FormLabel>
                <Field
                  as={Input}
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  validate={(value: string) => {
                    let error: FormikErrors<string> = "";

                    if (!value) {
                      error = "فیلد را پر کنید!";
                    }

                    return error;
                  }}
                />
                <FormErrorMessage fontSize={12}>
                  {errors.lastName}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex justifyContent="center" gap={6} paddingY={2}>
              <FormControl>
                <FormLabel htmlFor="email" fontSize={14}>
                  ایمیل
                </FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  placeholder="email@gmail.com"
                />
              </FormControl>
              <FormControl
                isRequired
                isInvalid={!!errors.phoneNumber && touched.phoneNumber}
              >
                <FormLabel htmlFor="phoneNumber" fontSize={14}>
                  تلفن همراه
                </FormLabel>
                <NumberInput inputMode="tel">
                  <Field
                    as={NumberInputField}
                    id="phoneNumber"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    placeholder="09121234567"
                    validate={(value: string) => {
                      let error: FormikErrors<string> = "";

                      if (value.length !== 11) {
                        error =
                          "شماره تلفن همراه شما باید حتما ۱۱ رقم داشته باشد.";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage fontSize={12}>
                    {errors.phoneNumber}
                  </FormErrorMessage>
                </NumberInput>
              </FormControl>
            </Flex>
            <Flex width="100%" justifyContent="center" gap={6}>
              {activeStep !== 0 && (
                <Button onClick={prevStep} size="md" colorScheme="gray">
                  بازگشت
                </Button>
              )}
              <Button
                size="md"
                disabled={!(isValid && dirty)}
                onClick={nextStep}
                onFocus={() => {
                  dispatch({
                    type: Actions.SET_DATA,
                    payload: values,
                  });
                }}
                colorScheme="red"
              >
                گام بعدی
              </Button>
            </Flex>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Information;
