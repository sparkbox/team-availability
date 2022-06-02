import getUniqueRoles from './getUniqueRoles';

describe('getUniqueRoles', () => {
  const MOCK_TEAM_MEMBERS_DATA = {
    '0001': {
      role: 'Developer',
    },
    '0002': {
      role: 'Developer',
    },
    '0003': {
      role: 'Frontend Designer',
    },
    '0004': {
      role: 'UI Designer',
    },
    '0005': {
      role: 'Technical Director',
    },
    '0006': {
      role: 'Project Manager',
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
        role: 'Developer',
      },
      '0002': {
        role: '',
      },
      '0003': {
        role: [],
      },
      '0004': {
        role: 'Developer',
      },
      '0005': {},
      '0006': {
        role: 'Project Manager',
      },
      '0007': {
        role: undefined,
      },
      '0008': {
        role: null,
      },
      '0009': {
        role: 'UI Designer',
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
        role: 3,
      },
      '0002': {
        role: 'Developer',
      },
      '0003': {
        role: true,
      },
      '0004': {
        role: {
          name: 'President',
        },
      },
      '0005': {
        role: 'Project Manager',
      },
      '0006': {
        role: ['Ranger', 'Heir of Isildur'],
      },
      '0007': {
        role: false,
      },
      '0008': {
        role: 'Developer',
      },
      '0009': {
        role: 'Developer',
      },
    };

    const roles = getUniqueRoles(MOCK_TEAM_MEMBERS_DATA_WITH_UNEXPECTED_DATA_TYPES);

    expect(roles).toEqual([
      'Developer', 'Project Manager',
    ]);
  });
});
