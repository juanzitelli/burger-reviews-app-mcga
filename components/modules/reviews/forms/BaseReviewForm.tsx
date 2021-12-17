/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  chakra,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Review } from "../../../../types/entities";

type ReviewWithoutId = Omit<Review, "_id">;

interface Props {
  defaultValues: ReviewWithoutId;
  onSubmit: SubmitHandler<ReviewWithoutId>;
}

export const BaseReviewForm = ({ defaultValues, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewWithoutId>({
    defaultValues,
  });

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={[1, 3]} gap={5}>
        <GridItem colSpan={[1, 3]}>
          <FormControl>
            <FormLabel>Burger name</FormLabel>
            <Input placeholder="Double Stacker" {...register("name")} />
            <FormHelperText></FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[1, 3]}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Best burger ever"
              {...register("description")}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[1, 1]}>
          <FormControl>
            <FormLabel>Burger score 🥩</FormLabel>
            <NumberInput min={1} max={10}>
              <NumberInputField
                {...register("burger_score", { required: true })}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText></FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[1, 1]}>
          <FormControl>
            <FormLabel>Bread score 🍞</FormLabel>
            <NumberInput min={1} max={10}>
              <NumberInputField
                {...register("bread_score", { required: true })}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText></FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[1, 1]}>
          <FormControl>
            <FormLabel>Fries score 🍟</FormLabel>
            <NumberInput min={1} max={10}>
              <NumberInputField
                {...register("fries_score", { required: true })}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText></FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[1, 3]}>
          <FormControl>
            <FormLabel>Place</FormLabel>
            <Input
              placeholder="Burger King"
              {...register("place", { required: true })}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[1, 3]}>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="vegan-friendly" mb="0">
              Is it vegan friendly?
            </FormLabel>
            <Switch id="vegan-friendly" {...register("is_vegan_friendly")} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[1, 3]}>
          <HStack gap={1}>
            <Button type="submit" colorScheme={"teal"}>
              Submit
            </Button>
            <Button
              onClick={() => reset(defaultValues)}
              colorScheme={"red"}
              variant={"outline"}
            >
              Reset
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </chakra.form>
  );
};
