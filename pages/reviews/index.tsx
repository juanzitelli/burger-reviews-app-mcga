import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Link,
  Spinner,
  Wrap,
} from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import NextLink from "next/link";
import React from "react";
import {
  ReviewCard,
  ReviewsList,
} from "../../components/modules/reviews/Review";
import { Error } from "../../components/modules/ui/Error";
import { PageHeading } from "../../components/modules/ui/PageHeading";
import { useReviews } from "../../hooks/reviews/useReviews";
import { ListAPIResponse } from "../../types/api";
import { Review } from "../../types/entities";

interface Props {}

const ReviewsPage = (props: Props) => {
  const { user } = Auth.useUser();
  const { data, error } = useReviews();

  if (error) {
    return <Error>{error.msg}</Error>;
  }

  if (!data) {
    return <Spinner />;
  }

  const {
    payload: { list: reviews },
  } = data as ListAPIResponse<Review>;

  const sortedReviews = reviews.sort((a: Review, b: Review) => {
    return (
      (b.bread_score + b.fries_score + b.burger_score) / 3 -
      (a.bread_score + a.fries_score + a.burger_score) / 3
    );
  });

  return (
    <>
      <Wrap>
        <PageHeading>Burger reviews 🍔</PageHeading>
        {user && (
          <Button colorScheme={"teal"}>
            <NextLink href="/reviews/new">Add Review</NextLink>
          </Button>
        )}
      </Wrap>
      <ReviewsList>
        {sortedReviews.length > 0 ? (
          sortedReviews.map((review) => {
            return <ReviewCard key={review._id} review={review} />;
          })
        ) : (
          <Alert status="info">
            <AlertIcon />
            <AlertTitle mr={2}>No reviews found</AlertTitle>
            <AlertDescription>
              Try{" "}
              <NextLink href={"/reviews/new"}>
                <Link>creating a new one</Link>
              </NextLink>
            </AlertDescription>
          </Alert>
        )}
      </ReviewsList>
    </>
  );
};

export default ReviewsPage;
