import getUniqueRoles from './getUniqueRoles';

describe('getUniqueRoles', () => {
  const MOCK_TEAM_MEMBERS_DATA = {
    '0001': {
      jobTitle: 'Developer',
    },
    '0002': {
      jobTitle: 'Developer',
    },
    '0003': {
      jobTitle: 'Frontend Designer',
    },
    '0004': {
      jobTitle: 'UI Designer',
    },
    '0005': {
      jobTitle: 'Technical Director',
    },
    '0006': {
      jobTitle: 'Project Manager',
    },
  };

  it('returns expected number of unique roles from all team members', () => {
    const roles = getUniqueRoles(MOCK_TEAM_MEMBERS_DATA);

    expect(roles.length).toEqual(5);
  });

  it('returns unique roles from all team members as an array of strings', () => {
    const roles = getUniqueRoles(MOCK_TEAM_MEMBERS_DATA);

    expect(roles).toEqual([
      'Developer', 'Frontend Designer', 'UI Designer', 'Technical Director', 'Project Manager',
    ]);
  });

  it('does not include roles in the retured array that evaluate to a falsy value', () => {
    const MOCK_TEAM_MEMBERS_DATA_WITH_FALSY_VALUES = {
      '0001': {
        jobTitle: 'Developer',
      },
      '0002': {
        jobTitle: '',
      },
      '0003': {
        jobTitle: [],
      },
      '0004': {
        jobTitle: 'Developer',
      },
      '0005': {},
      '0006': {
        jobTitle: 'Project Manager',
      },
      '0007': {
        jobTitle: undefined,
      },
      '0008': {
        jobTitle: null,
      },
      '0009': {
        jobTitle: 'UI Designer',
      },
    };

    const roles = getUniqueRoles(MOCK_TEAM_MEMBERS_DATA_WITH_FALSY_VALUES);

    expect(roles).toEqual([
      'Developer', 'Project Manager', 'UI Designer',
    ]);
  });

  it('does not include roles in the retured array that are of an unexpected data type', () => {
    const MOCK_TEAM_MEMBERS_DATA_WITH_UNEXPECTED_DATA_TYPES = {
      '0001': {
        jobTitle: 3,
      },
      '0002': {
        jobTitle: 'Developer',
      },
      '0003': {
        jobTitle: true,
      },
      '0004': {
        jobTitle: {
          name: 'President',
        },
      },
      '0005': {
        jobTitle: 'Project Manager',
      },
      '0006': {
        jobTitle: ['Ranger', 'Heir of Isildur'],
      },
      '0007': {
        jobTitle: false,
      },
      '0008': {
        jobTitle: 'Developer',
      },
      '0009': {
        jobTitle: 'Developer',
      },
    };

    const roles = getUniqueRoles(MOCK_TEAM_MEMBERS_DATA_WITH_UNEXPECTED_DATA_TYPES);

    expect(roles).toEqual([
      'Developer', 'Project Manager',
    ]);
  });
});
