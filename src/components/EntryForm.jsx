import { useState } from "react";
import { Button, HStack, Text, Box, Textarea } from "@chakra-ui/react";

export default function EntryForm({ moods, onAddEntry }) {
  const [mood, setMood] = useState("");
  const [entry, setEntry] = useState("");

  const handleSubmit = () => {
    const newEntry = {
      id: Date.now(),
      mood: mood,
      text: entry,
      date: new Date().toLocaleDateString("en-CA"),
    };

    onAddEntry(newEntry);
    setMood("");
    setEntry("");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap={4}
      p={4}
      bgColor="white"
      borderRadius="xl"
      boxShadow="md"
    >
      <HStack flexWrap="wrap" justify="center">
        {moods.map((m) => (
          <Button
            key={m.emoji}
            onClick={() => setMood(m.emoji)}
            bg={m.emoji === mood ? "brand.500" : "white"}
            color="gray.700"
            variant="unstyled"
            px={2}
            py={2}
            borderRadius="full"
            boxShadow={m.emoji === mood ? "md" : "sm"}
            border={m.emoji === mood ? "1px solid" : "none"}
            borderColor={m.emoji === mood ? "brand.600" : "gray.200"}
            transform={m.emoji === mood ? "translateY(-2px)" : "none"}
            transition="all 0.2s ease"
            _hover={{
              bg: m.emoji === mood ? "white" : "gray.50",
              cursor: "pointer",
            }}
          >
            {m.emoji}
          </Button>
        ))}
      </HStack>
      <Textarea
        placeholder="What is your little shift today?"
        bgColor="white"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <Button
        onClick={handleSubmit}
        size="sm"
        colorScheme="brand"
        variant="solid"
        isDisabled={!mood || !entry}
      >
        Add your Little Shift
      </Button>
    </Box>
  );
}
