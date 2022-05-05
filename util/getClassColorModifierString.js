export default function getClassColorModifierString(availableHours) {
  if (availableHours === 0) return 'gray';
  if (availableHours >= 16) return 'green';
  return 'blue';
}
