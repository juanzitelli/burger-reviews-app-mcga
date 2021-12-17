import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface ErrorProps {}

export const Error = ({ children }: PropsWithChildren<ErrorProps>) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Whoops! This is embarrasing...</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};
