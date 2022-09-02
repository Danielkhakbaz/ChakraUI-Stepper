import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import Stepper from "../components/stepper/stepper";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ChakraUI Stepper</title>
      </Head>

      <>
        <Container minWidth="100vw" maxWidth="100vw" paddingY={2}>
          <Stepper />
        </Container>
      </>
    </>
  );
};

export default Home;
