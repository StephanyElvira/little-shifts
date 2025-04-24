export const moods = [
  { emoji: "😊", label: "Happy", color: "#FFF4B8" },
  { emoji: "😔", label: "Sad", color: "#B6D0E2" },
  { emoji: "😠", label: "Angry", color: "#F8B9B9" },
  { emoji: "😴", label: "Sleepy", color: "#DCCEF2" },
  { emoji: "❤️", label: "Loved", color: "#FFD1DC" },
  { emoji: "😶", label: "Neutral", color: "#DDE8D3" },
];

export function getMoodLabel(emoji) {
  return moods.find((m) => m.emoji === emoji)?.label || "";
}

export function getMoodColor(emoji) {
  return moods.find((m) => m.emoji === emoji)?.color || "#ccc";
}
