import { useMemo } from "react";
import { Text, Box } from "@chakra-ui/react";
import { positivityQuotes } from "../data/Quotes";

export default function DailyQuote() {
  const quote = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    const hash = today.split("-").join(""); // "20250425" -> hash-like
    const index = parseInt(hash, 10) % positivityQuotes.length;
    return positivityQuotes[index];
  }, []);

  return (
    <Box
      p={2}
      bg="brand.50"
      opacity={0.8}
      borderRadius="full"
      textAlign="center"
      my={0}
      position="relative"
    >
      <Text
        position="absolute"
        top="0"
        left="2"
        fontSize="3xl"
        color="brand.400"
        zIndex={0}
        lineHeight="1"
        transform="translate(-10%, -20%)"
      >
        ❝
      </Text>

      <Text
        fontStyle="italic"
        fontSize="xs"
        color="gray.900"
        position="relative"
        zIndex={1}
      >
        {quote}
      </Text>
    </Box>
  );
}
