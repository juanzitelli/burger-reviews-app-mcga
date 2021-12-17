import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Review } from "../../../../types/entities";
import { BaseReviewForm } from "./BaseReviewForm";

interface Props {}

export const AddReviewForm = (props: Props) => {
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (data: Omit<Review, "_id">) => {
    const {
      data: { status },
    } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews/create`, {
      review: { ...data },
    });

    if (status === "ok") {
      router.push("/reviews");
      toast({
        title: "Review created.",
        description: `Review for ${data.name} was submitted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <BaseReviewForm
      onSubmit={onSubmit}
      defaultValues={{
        name: "",
        bread_score: 1,
        fries_score: 1,
        burger_score: 1,
        description: "",
        is_vegan_friendly: false,
        place: "",
      }}
    ></BaseReviewForm>
  );
};
