import { Link, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { Auth } from "@supabase/ui";
import { PageHeading } from "../../../components/modules/ui/PageHeading";
import { useRouter } from "next/router";
import { UpdateReviewForm } from "../../../components/modules/reviews/forms/UpdateReviewForm";
import { useReview } from "../../../hooks/reviews/useReview";
import { Error } from "../../../components/modules/ui/Error";
import { ItemAPIResponse } from "../../../types/api";
import { Review } from "../../../types/entities";

const EditReviewPage = () => {
  const { user } = Auth.useUser();
  const {
    query: { reviewId },
  } = useRouter();

  const { data, error } = useReview({ reviewId: reviewId as string });

  if (error) {
    return <Error>{error.msg}</Error>;
  }

  if (!data) {
    return <Spinner />;
  }

  const {
    payload: { item: review },
  } = data as ItemAPIResponse<Review>;

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
      <PageHeading>Edit burger review ✏️🍔</PageHeading>
      <UpdateReviewForm review={review} />
    </>
  );
};

export default EditReviewPage;
