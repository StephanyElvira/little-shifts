import { Box, Text, Badge, SimpleGrid } from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getStreak } from "../utils/getStreak";
import DailyQuote from "./DailyQuote";
import { countMoodsWithLabel } from "@/data/Moods";

// function countMoods(entries) {
//   const moodCount = {};
//   entries.forEach((entry) => {
//     moodCount[entry.mood] = (moodCount[entry.mood] || 0) + 1;
//   });
//   return Object.entries(moodCount).map(([mood, count]) => ({
//     name: mood,
//     value: count,
//   }));
// }

const COLORS = {
  "😊": "#FFF4B8",
  "😔": "#B6D0E2",
  "😠": "#F8B9B9",
  "😴": "#DCCEF2",
  "❤️": "#FFD1DC",
  "😶": "#DDE8D3",
};

export default function MoodOverview({ entries }) {
  const data = countMoodsWithLabel(entries);
  const streak = getStreak(entries);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
      {/* Pie Chart */}
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
        <Text mb={2} fontSize="md" fontWeight="semibold" textAlign="center">
          Mood Breakdown
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              nameKey="name"
              labelLine={false}
              label={false}
              stroke="#fff"
              strokeWidth={1}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={COLORS[entry.name] || "#EEE"} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ fontSize: "14px" }}
              formatter={(value, entry) => entry.payload.label}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Streak Card */}
      <Box
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        gap={4}
        p={4}
        bgColor="white"
        borderRadius="xl"
        boxShadow="md"
      >
        <Text
          mb={2}
          fontSize="md"
          fontWeight="semibold"
          textAlign="center"
          display={streak > 2 ? "block" : "none"}
        >
          🔥 Daily Streak
        </Text>
        <Badge
          fontSize="sm"
          px={2}
          py={2}
          borderRadius="lg"
          colorScheme="orange"
          display={streak > 2 ? "inline-block" : "none"}
        >
          {streak} {streak === 1 ? "day" : "days"}
        </Badge>
        <DailyQuote />
      </Box>
    </SimpleGrid>
  );
}
