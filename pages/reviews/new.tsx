import { Link, Text } from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import NextLink from "next/link";
import React from "react";
import { AddReviewForm } from "../../components/modules/reviews/forms/AddReviewForm";
import { PageHeading } from "../../components/modules/ui/PageHeading";

interface Props {}

const NewReviewPage = (props: Props) => {
  const { user } = Auth.useUser();

  if (!user) {
    return (
      <Text>
        You need to be{" "}
        <NextLink href="/auth/welcome">
          <Link>signed in</Link>
        </NextLink>{" "}
        to see this content.
      </Text>
    );
  }

  return (
    <>
      <PageHeading>New burger review ➕🍔</PageHeading>
      <AddReviewForm />
    </>
  );
};

export default NewReviewPage;
