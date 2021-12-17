import { Code, Link, Text } from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import type { NextPage } from "next";
import { PageHeading } from "../components/modules/ui/PageHeading";
import NextLink from "next/link";
const Home: NextPage = () => {
  const { user } = Auth.useUser();

  return (
    <>
      <PageHeading>Welcome to the Burger Reviews App!</PageHeading>
      <Text>
        Get started by navigating to{" "}
        <Code>
          <NextLink href="/reviews">
            <Link>/reviews</Link>
          </NextLink>
        </Code>
      </Text>
    </>
  );
};

export default Home;
