import {
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

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
    <VStack align="stretch" mt={8} spacing={4}>
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
                <Badge fontSize="lg" variant="ghost">
                  {entry.mood}
                </Badge>
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
    </VStack>
  );
}
