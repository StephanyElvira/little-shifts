import {
  Text,
  HStack,
  Badge,
  Button,
  Card,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { getMoodLabel, getMoodColor } from "@/data/Moods";

const MotionCard = motion.create(Card);

export default function EntryList({ entries, onDelete }) {
  if (!entries || entries.length === 0) {
    return (
      <AnimatePresence>
        <MotionCard
          key="filter-summary"
          initial={{ opacity: 0, y: -20 }} // 👈 starts above
          animate={{ opacity: 1, y: 0 }} // 👈 fades and slides down
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          display="flex"
          flexDirection="column"
          gap={4}
          p={2}
          bgColor="brand.600"
          borderRadius="xl"
          boxShadow="md"
        >
          <CardBody>
            <Text mt={6} color="white" textAlign="center">
              No entries yet. Start with a little shift 🌱
            </Text>
          </CardBody>
        </MotionCard>
      </AnimatePresence>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mt={8}>
      <AnimatePresence>
        {entries.map((entry) => (
          <MotionCard
            key={entry.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            border="1px solid"
            borderColor="gray.100"
            overflow="hidden"
          >
            <CardBody>
              <HStack justify="space-between" mb={2}>
                <HStack spacing={2}>
                  <Text>{entry.mood}</Text>
                  <Text
                    color="gray.700"
                    bg={getMoodColor(entry.mood)}
                    width="full"
                    px={2}
                    py={0}
                    fontSize="sm"
                    borderRadius="md"
                    fontWeight="normal"
                    textTransform="none"
                  >
                    {getMoodLabel(entry.mood)}
                  </Text>
                </HStack>
                <Text fontSize="xs" color="gray.500">
                  {entry.date}
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text>{entry.text}</Text>
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={() => onDelete(entry.id)}
                >
                  Delete
                </Button>
              </HStack>
            </CardBody>
          </MotionCard>
        ))}
      </AnimatePresence>
    </SimpleGrid>
  );
}
