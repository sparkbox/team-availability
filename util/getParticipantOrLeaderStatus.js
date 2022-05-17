function capitalizeString(string) {
  const capitalizedString = string.replace(/^\w/, (char) => char.toUpperCase());

  return capitalizedString;
}

export default function getParticipantOrLeaderStatus({ cohortParticipant, cohortLeader }) {
  if (cohortLeader) {
    return `${capitalizeString(cohortLeader)} (Lead)`;
  }

  return capitalizeString(cohortParticipant);
}
