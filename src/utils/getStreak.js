export function getStreak(entries) {
  if (!entries || entries.length === 0) return 0;

  const today = new Date().toISOString().split("T")[0];

  const dates = Array.from(new Set(entries.map((entry) => entry.date))).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  let streak = 0;
  let current = new Date(today);

  for (let date of dates) {
    const formatted = current.toISOString().split("T")[0];
    if (formatted === date) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
