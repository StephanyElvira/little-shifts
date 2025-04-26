import {
  SimpleGrid,
  Box,
  Text,
  Badge,
  HStack,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { achievements } from "@/data/achievements";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function Achievements({ entries, streak }) {
  return (
    <Box pb={2}>
      <Text fontSize="2xl" textAlign="center" fontFamily="accent">
        Achievements
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={2}>
        {achievements.map((a) => {
          const isUnlocked = a.unlocked(entries, streak);
          return (
            <Box
              key={a.id}
              px={2}
              bgColor={isUnlocked ? "orange.100" : "gray.100"}
              borderRadius="xl"
              boxShadow="md"
            >
              <HStack justify="space-between">
                <Text fontSize="3xl" mt={1}>
                  {a.icon}
                </Text>

                <HStack spacing={1}>
                  <Text
                    fontWeight={isUnlocked ? "semibold" : "normal"}
                    fontSize="xs"
                    color="gray.800"
                  >
                    {a.title}
                  </Text>
                  <Tooltip
                    label={a.description}
                    fontSize="xs"
                    hasArrow
                    bg="gray.700"
                    color="white"
                  >
                    <InfoOutlineIcon
                      boxSize={2}
                      color="gray.500"
                      cursor="pointer"
                    />
                  </Tooltip>
                </HStack>
              </HStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
