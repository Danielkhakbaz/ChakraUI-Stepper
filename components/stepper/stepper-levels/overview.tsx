import Link from "next/link";
import { useRouter } from "next/router";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { useStepperContext } from "../../../providers/stepper/stepper-context";

const Overview: React.FC = () => {
  const { pathname } = useRouter();

  const { data, steps, stepsActions } = useStepperContext();

  const { date, time, userData } = data;
  const { activeStep, prevStep, nextStep } = stepsActions;

  const { name, lastName, email, phoneNumber } = userData;

  return (
    <>
      <Flex flexDirection="column" width="100%">
        <Flex width="100%">
          {date && (
            <Text width="100%" padding={5}>
              تاریخ: {date}
            </Text>
          )}
          {time && (
            <Text width="100%" padding={5}>
              ساعت: {time}
            </Text>
          )}
        </Flex>
        <Flex width="100%">
          <Text width="100%" padding={5}>
            نام: {name}
          </Text>
          <Text width="100%" padding={5}>
            نام خانوادگی: {lastName}
          </Text>
        </Flex>
        <Flex width="100%">
          {email && (
            <Text width="100%" padding={5}>
              ایمیل: {email}
            </Text>
          )}
          <Text width="100%" padding={5}>
            تلفن همراه: {phoneNumber}
          </Text>
        </Flex>
      </Flex>
      <Flex width="100%" justifyContent="center" gap={6}>
        {pathname === "/forms" ? (
          <Link href="/">
            <Button size="md" colorScheme="red">
              بازگشت
            </Button>
          </Link>
        ) : (
          activeStep !== 0 && (
            <Button onClick={prevStep} size="md" colorScheme="gray">
              بازگشت
            </Button>
          )
        )}
        {pathname !== "/forms" && (
          <Box>
            {activeStep !== steps.length - 1 ? (
              <Button
                size="md"
                type="submit"
                onClick={nextStep}
                colorScheme="red"
              >
                گام بعدی
              </Button>
            ) : (
              <Button size="md" colorScheme="red">
                <Link href="/forms">مشاهده فرم‌ها</Link>
              </Button>
            )}
          </Box>
        )}
      </Flex>
    </>
  );
};

export default Overview;
