import { Container } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { Navbar, NavbarLink } from "../Navbar";

interface DefaultLayoutProps {}

export const DefaultLayout = (props: PropsWithChildren<DefaultLayoutProps>) => {
  return (
    <>
      <Navbar>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/reviews">Reviews</NavbarLink>
      </Navbar>
      <Container maxW="xl" p="1rem" as="main">
        {props.children}
      </Container>
    </>
  );
};
