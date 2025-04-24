import {
  Box,
  Badge,
  Text,
  VStack,
  HStack,
  Button,
  Select,
  Input,
  Highlight,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import MoodOverview from "./components/MoodOverview";
import { motion } from "framer-motion";
import { moods } from "./data/Moods";

const MotionBox = motion.create(Box);

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("little-shifts") || "[]");
    setEntries(saved);
  }, []);

  const addEntry = (newEntry) => {
    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("little-shifts", JSON.stringify(updated));
  };

  const deleteEntry = (id) => {
    const updated = entries.filter((entry) => entry.id !== id);
    setEntries(updated);
    localStorage.setItem("little-shifts", JSON.stringify(updated));
  };

  const filteredEntries = entries.filter((entry) => {
    const moodMatch = selectedMood ? entry.mood === selectedMood : true;
    const dateMatch = selectedDate ? entry.date === selectedDate : true;
    return moodMatch && dateMatch;
  });

  return (
    <Box
      p={6}
      alignItems="center"
      maxWidth="800px"
      my={[0, 0, 0, 5]}
      mx="auto"
      minH="100vh"
      bgColor="#FFFEF6"
      bgImage="url('/wave-pattern2.svg')"
      // bgSize="40%"
      borderRadius="3xl"
      boxShadow="lg"
    >
      <VStack spacing={4} align="stretch">
        <Image src="/ls.svg" alt="Little Shifts" maxW="350px" mx="auto" />

        <Text
          textAlign="center"
          fontSize="md"
          color="gray.600"
          lineHeight="1.4"
        >
          <Highlight
            query={["gentle space", "every feeling", "your space"]}
            styles={{
              px: "1",
              py: "0.1",
              bg: "#E6CDA1",
              opacity: "0.5",
              rounded: "full",
            }}
          >
            A gentle space to track your mood and daily wins. Welcome to your
            personal sanctuary; a quiet corner of calm where every feeling is
            valid, and every little shift matters. Reflect, breathe, and
            celebrate small steps as they shape your journey. This is your space
            to slow down, check in, and be kind to yourself, one entry at a
            time.
          </Highlight>
        </Text>
        <MoodOverview entries={entries} />

        <EntryForm moods={moods} onAddEntry={addEntry} />

        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          p={2}
          bgColor="white"
          borderRadius="xl"
          boxShadow="md"
        >
          <HStack spacing={2}>
            <Select
              placeholder="Mood"
              size="xs"
              value={selectedMood}
              variant="flushed"
              bgColor="white"
              onChange={(e) => setSelectedMood(e.target.value)}
            >
              {moods.map((mood) => (
                <option key={mood.emoji} value={mood.emoji}>
                  {mood.emoji} {mood.label}
                </option>
              ))}
            </Select>

            <Input
              type="date"
              placeholder="Date"
              size="xs"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
            />
            {(selectedMood || selectedDate) && (
              <Button
                size="xs"
                variant="solid"
                width={{ base: "100%", sm: "auto" }}
                px={5}
                onClick={() => {
                  setSelectedMood("");
                  setSelectedDate("");
                }}
              >
                Clear Filters
              </Button>
            )}
          </HStack>
        </Box>

        {(selectedMood || selectedDate) && (
          <MotionBox
            display="flex"
            flexDirection="column"
            gap={4}
            p={2}
            bgColor="brand.600"
            borderRadius="xl"
            boxShadow="md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Text fontSize="xs" color="white" textAlign="center">
              Showing {`${selectedMood} moods`}{" "}
              {selectedDate && `on ${selectedDate}`}
            </Text>{" "}
          </MotionBox>
        )}

        <EntryList entries={filteredEntries} onDelete={deleteEntry} />
      </VStack>
    </Box>
  );
}

export default App;
