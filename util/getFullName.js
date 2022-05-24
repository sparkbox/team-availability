export default function getFullName({ firstName, lastName, suffix }) {
  const suffixString = `${suffix && ` ${suffix}`}`;

  if (firstName && lastName) return `${firstName} ${lastName}${suffixString}`;

  if (firstName) return `${firstName}${suffixString}`;

  if (lastName) return lastName;

  return 'Stranger';
}
