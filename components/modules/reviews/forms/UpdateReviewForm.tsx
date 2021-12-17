import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Review } from "../../../../types/entities";
import { BaseReviewForm } from "./BaseReviewForm";

interface Props {
  review: Review & { __v?: string };
}

export const UpdateReviewForm = ({
  review: { _id, __v, ...reviewData },
}: Props) => {
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (data: Omit<Review, "_id">) => {
    const {
      data: { status },
    } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/reviews/update/${_id}`,
      {
        review: { ...data },
      }
    );

    if (status === "ok") {
      router.push("/reviews");
      toast({
        title: "Review updated.",
        description: `Review update for ${data.name} was submitted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return <BaseReviewForm onSubmit={onSubmit} defaultValues={reviewData} />;
};
