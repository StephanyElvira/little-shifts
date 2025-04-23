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
      bg="brand.100"
      border="1px solid"
      borderColor="brand.200"
      borderRadius="lg"
      textAlign="center"
      my={2}
    >
      <Text fontStyle="italic" color="black" fontSize="sm">
        {quote}
      </Text>
    </Box>
  );
}
