import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { Review } from "../../../types/entities";
import { Score } from "./Score";
import NextLink from "next/link";
import { Auth } from "@supabase/ui";
import axios from "axios";
import { useRouter } from "next/router";

interface ContainerProps {}

export const ReviewsList = ({
  children,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <SimpleGrid gridAutoFlow="row" gap={10}>
      {children}
    </SimpleGrid>
  );
};

interface CardProps {
  review: Review;
}

export const ReviewCard = ({
  review: {
    _id,
    name,
    description,
    is_vegan_friendly,
    bread_score,
    burger_score,
    place,
    fries_score,
  },
}: CardProps) => {
  const { user } = Auth.useUser();
  const toast = useToast();
  const router = useRouter();

  return (
    <Box
      key={_id}
      maxW={"445px"}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {place}
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text color={"gray.500"}>{description}</Text>
      </Stack>
      <Stack mt={6} direction={"column"} spacing={4} align={"start"}>
        {is_vegan_friendly && (
          <Badge colorScheme="green">Vegan Friendly 🌱</Badge>
        )}
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Score
            breadScore={bread_score}
            friesScore={fries_score}
            burgerScore={burger_score}
          />
        </Stack>
        {user && (
          <HStack>
            <Button colorScheme="green" variant={"outline"}>
              <NextLink href={`/reviews/edit/${_id}`}>
                <Link>Edit</Link>
              </NextLink>
            </Button>
            <Button
              onClick={async () => {
                if (
                  window.confirm("Are you sure you want to delete this review?")
                ) {
                  const {
                    data: { status, msg },
                  } = await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/reviews/delete/${_id}`
                  );
                  if (status === "ok") {
                    toast({
                      title: "Review deleted.",
                      description: `Review for ${name} was deleted successfully`,
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    return router.reload();
                  }

                  toast({
                    title: "Something went wrong.",
                    description: msg,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                }
              }}
              colorScheme="red"
            >
              Delete
            </Button>
          </HStack>
        )}
      </Stack>
    </Box>
  );
};
