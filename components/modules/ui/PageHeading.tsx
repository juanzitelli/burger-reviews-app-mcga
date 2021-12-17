import { Heading } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface Props {}

export const PageHeading = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Heading as="h1" mb={4}>
      {children}
    </Heading>
  );
};
