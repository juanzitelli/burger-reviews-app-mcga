import { chakra, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { UserAvatar } from "./UserAvatar";

interface NavbarProps {}

export const Navbar = ({ children }: PropsWithChildren<NavbarProps>) => {
  const { pathname } = useRouter();
  return (
    <Flex
      as="header"
      justify="space-between"
      p="1rem"
      maxW={"xl"}
      mx="auto"
      bg="transparent"
    >
      <HStack as="nav">{children}</HStack>
      {pathname !== "/auth/welcome" && <UserAvatar />}
    </Flex>
  );
};

interface NavbarLinkProps {
  href: string;
}

export const NavbarLink = ({
  href,
  children,
}: PropsWithChildren<NavbarLinkProps>) => {
  return (
    <NextLink href={href}>
      <Link>{children}</Link>
    </NextLink>
  );
};
