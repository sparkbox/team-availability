export default function getFormattedDate(date) {
  const [year, month, day] = date.split('-');

  return `${month}/${day}/${year}`;
}
