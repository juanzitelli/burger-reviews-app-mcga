import {
  Badge,
  Center,
  HStack,
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface ScoreProps {
  burgerScore: number;
  friesScore: number;
  breadScore: number;
}

export const Score = ({
  burgerScore,
  breadScore,
  friesScore,
}: PropsWithChildren<ScoreProps>) => {
  const averageScore = (burgerScore + friesScore + breadScore) / 3;
  return (
    <Stat border={"1px"} borderRadius={10} p={4}>
      <VStack textAlign={"left"} gap={1}>
        <StatLabel>Average score</StatLabel>
        <StatNumber>
          <Text mb={4}>
            {averageScore.toPrecision(2)} points
            <Text textAlign={"right"} fontSize={"sm"} fontStyle={"italic"}>
              /10
            </Text>
          </Text>
        </StatNumber>
      </VStack>
      <VStack alignItems={"end"} gap={1}>
        <ScoreStat value={burgerScore} label="Burger" />
        <ScoreStat value={friesScore} label="Fries" />
        <ScoreStat value={breadScore} label="Bread" />
      </VStack>
    </Stat>
  );
};

interface ScoreStatProps {
  value: number;
  label: string;
}

export const ScoreStat = ({ value, label }: ScoreStatProps) => {
  const isGreaterThanFive = value > 5;
  return (
    <Badge>
      <Center>
        <Text>{label}</Text>
        <HStack>
          <StatArrow type={isGreaterThanFive ? "increase" : "decrease"} />
          <Text>{value.toPrecision(2)}</Text>
        </HStack>
      </Center>
    </Badge>
  );
};
