import { Box, Text, Badge, SimpleGrid, Tag } from "@chakra-ui/react";
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
import Achievements from "./Achievements";
import { countMoods, getMoodColor, getMoodLabel } from "@/utils/Moods";

{
  /*not sure yet where to use*/
}

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

// const COLORS = {
//   "😊": "#FFF4B8",
//   "😔": "#B6D0E2",
//   "😠": "#F8B9B9",
//   "😴": "#DCCEF2",
//   "❤️": "#FFD1DC",
//   "😶": "#DDE8D3",
// };

export default function MoodOverview({ entries }) {
  const data = countMoods(entries);
  const streak = getStreak(entries);
  const mostUsedMood = data.reduce(
    (prev, current) => (prev.value > current.value ? prev : current),
    { name: "", value: 0 }
  );

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={2}>
      {/* Pie Chart */}
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        gap={4}
        p={4}
        bgColor="#fff"
        borderRadius="xl"
        boxShadow="md"
      >
        <Text fontSize="xl">Mood Overview</Text>
        <Text fontSize="xs" textAlign="center">
          You have been feeling{" "}
          <Text
            as="span"
            bg={getMoodColor(mostUsedMood.name)}
            px={2}
            py={1}
            borderRadius="full"
          >
            {mostUsedMood.name} {getMoodLabel(mostUsedMood.name)}
          </Text>{" "}
          the most.
        </Text>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              nameKey="name"
              labelLine={false}
              stroke="#fff"
              strokeWidth={1}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={getMoodColor(entry.name)} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "100%",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                padding: "6px 10px",
                fontSize: "13px",
              }}
              itemStyle={{
                color: "#2D3748",
                fontWeight: 400,
              }}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconType="circle"
              wrapperStyle={{
                backgroundColor: "#F9F9F9",
                color: "#2D3748",
                padding: "8px 12px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                fontSize: "10px",
              }}
              formatter={(value, entry) => (
                <span style={{ color: "#2D3748", fontWeight: 500 }}>
                  {entry.payload.label}
                </span>
              )}
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
        <Achievements entries={entries} streak={streak} />

        <DailyQuote />
      </Box>
    </SimpleGrid>
  );
}
