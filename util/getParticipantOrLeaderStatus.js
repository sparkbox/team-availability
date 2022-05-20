export default function getParticipantOrLeaderStatus({ cohortParticipant, cohortLeader }) {
  if (cohortLeader) {
    return `${cohortLeader} (Lead)`;
  }

  return cohortParticipant;
}
