import getParticipantOrLeaderStatus from './getParticipantOrLeaderStatus';

describe('getParticipantOrLeaderStatus', () => {
  it('returns "COHORT_NAME (Lead)" if team member is lead of that cohort', () => {
    const teamMemberCohortData = { cohortParticipant: 'riders of rohan', cohortLeader: 'riders of rohan' };
    const cohortStatus = getParticipantOrLeaderStatus(teamMemberCohortData);

    expect(cohortStatus).toEqual('riders of rohan (Lead)');
  });

  it('returns only "COHORT_NAME" if team member is a participant of that cohort', () => {
    const teamMemberCohortData = { cohortParticipant: 'riders of rohan', cohortLeader: '' };
    const cohortStatus = getParticipantOrLeaderStatus(teamMemberCohortData);

    expect(cohortStatus).toEqual('riders of rohan');
  });

  it('returns an empty string if team member belongs to no cohort', () => {
    const teamMemberCohortData = { cohortParticipant: '', cohortLeader: '' };
    const cohortStatus = getParticipantOrLeaderStatus(teamMemberCohortData);

    expect(cohortStatus).toEqual('');
  });
});
