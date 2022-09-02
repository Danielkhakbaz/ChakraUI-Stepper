import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "../themes/theme";
import StepperProvider from "../providers/stepper/stepper-provider";
import Compose from "../utils/compose/compose";
import "../styles/modules/_app.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Providers = [StepperProvider];

  return (
    <Compose providers={Providers}>
      <ChakraProvider theme={Theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Compose>
  );
};

export default MyApp;
