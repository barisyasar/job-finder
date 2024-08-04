// Format Date
export function formatDate(createdAt) {
  const date = new Date(createdAt);

  // Ensure the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
