export default function getClassColorModifierString(weeklyCapacity, forecastedHours) {
  if (weeklyCapacity - forecastedHours >= (weeklyCapacity/2)) return 'green';
  if (weeklyCapacity - forecastedHours > 0) return 'blue';
  return 'gray';
}
