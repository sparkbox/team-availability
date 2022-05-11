export default function getFullName({ firstName, lastName }) {
  if (firstName && lastName) return `${firstName} ${lastName}`;

  if (firstName) return firstName;

  if (lastName) return lastName;

  return 'Stranger';
}
