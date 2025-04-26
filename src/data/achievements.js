export const achievements = [
  {
    id: "first-entry",
    title: "First Shift",
    description: "You added your very first journal entry!",
    unlocked: (entries) => entries.length >= 1,
    icon: "📝",
  },
  {
    id: "three-day-streak",
    title: "Getting the Hang of It",
    description: "Logged entries 3 days in a row.",
    unlocked: (entries, streak) => streak >= 3,
    icon: "🔥",
  },
  {
    id: "all-moods",
    title: "Emotional Explorer",
    description: "Logged each mood at least once.",
    unlocked: (entries) => {
      const moodsUsed = new Set(entries.map((e) => e.mood));
      return moodsUsed.size >= 6; // assuming 6 moods total
    },
    icon: "🧭",
  },
  {
    id: "storyteller",
    title: "Storyteller",
    description: "Wrote a Little Shift longer than 200 characters.",
    unlocked: (entries) => entries.some((e) => (e.text || "").length > 200),
    icon: "📖",
  },
  {
    id: "self-hugger",
    title: "Self-Hugger",
    description: "Wrote a positive or comforting note to yourself.",
    unlocked: (entries) =>
      entries.some(
        (e) =>
          (e.text || "").toLowerCase().includes("proud") ||
          (e.text || "").toLowerCase().includes("kind") ||
          (e.text || "").toLowerCase().includes("grateful") ||
          (e.text || "").toLowerCase().includes("strong")
      ),
    icon: "🤗",
  },
  {
    id: "little-legend",
    title: "Little Legend",
    description: "Logged 30 shifts total.",
    unlocked: (entries) => entries.length >= 50,
    icon: "🌟",
  },
];
