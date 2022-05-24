import getUniqueCurrentProjects from './getUniqueCurrentProjects';

describe('getUniqueCurrentProjects', () => {
  const MOCK_TEAM_MEMBERS_DATA = {
    '0001': {
      currentProjects: [
        {
          client: 'Thorin Oakenshield',
          project: 'Quest of Erebor',
          startDate: '2022-04-27',
          endDate: '2022-11-23',
        },
      ],
    },
    '0002': {
      currentProjects: [
        {
          client: 'Thorin Oakenshield',
          project: 'Quest of Erebor',
          startDate: '2022-04-27',
          endDate: '2022-11-23',
        },
        {
          client: 'White Council',
          project: 'Dol Guldur',
          startDate: '2022-05-02',
          endDate: '2022-09-10',
        },
      ],
    },
    '0003': {
      currentProjects: [
        {
          client: 'Internal',
          project: 'Lonely Mountain Residency',
          startDate: '1851-04-12',
          endDate: '2022-06-03',
        },
      ],
    },
  };

  it('returns expected number of unique current projects from all team members', () => {
    const currentProjects = getUniqueCurrentProjects(MOCK_TEAM_MEMBERS_DATA);

    expect(currentProjects.length).toEqual(3);
  });

  it('returns unique current projects from all team members as an array of strings in alphabetical order', () => {
    const currentProjects = getUniqueCurrentProjects(MOCK_TEAM_MEMBERS_DATA);

    expect(currentProjects).toEqual([
      'Dol Guldur', 'Lonely Mountain Residency', 'Quest of Erebor',
    ]);
  });

  it('includes a project that has a client name but no project name as "Unnamed CLIENT_NAME Project"', () => {
    const MOCK_TEAM_MEMBERS_DATA_WITHOUT_PROJECT_NAME = {
      '0001': {
        currentProjects: [
          {
            client: 'Elves of Mirkwood',
            project: undefined,
          },
        ],
      },
      '0002': {
        currentProjects: [
          {
            client: 'Lake-town',
            startDate: '2022-01-12',
            endDate: '2022-06-30',
          },
        ],
      },
      '0003': {
        currentProjects: [
          {
            client: 'Gollum',
            project: '',
            startDate: '1434-06-12',
            endDate: '2023-03-25',
          },
        ],
      },
    };

    const currentProjects = getUniqueCurrentProjects(MOCK_TEAM_MEMBERS_DATA_WITHOUT_PROJECT_NAME);

    expect(currentProjects).toEqual([
      'Unnamed Elves of Mirkwood Project', 'Unnamed Gollum Project', 'Unnamed Lake-town Project',
    ]);
  });

  it('includes a project has different start or end dates across team members as one unique project', () => {
    const MOCK_TEAM_MEMBERS_DATA_DIFF_DATES = {
      '0001': {
        currentProjects: [
          {
            client: 'Thorin Oakenshield',
            project: 'Quest of Erebor',
            startDate: '2022-04-27',
            endDate: '2022-11-23',
          },
        ],
      },
      '0002': {
        currentProjects: [
          {
            client: 'Thorin Oakenshield',
            project: 'Quest of Erebor',
            startDate: '2022-04-27',
            endDate: '2022-11-16',
          },
        ],
      },
      '0003': {
        currentProjects: [
          {
            client: 'Thorin Oakenshield',
            project: 'Quest of Erebor',
            startDate: '2022-05-27',
            endDate: '2022-11-23',
          },
        ],
      },
    };

    const currentProjects = getUniqueCurrentProjects(MOCK_TEAM_MEMBERS_DATA_DIFF_DATES);

    expect(currentProjects).toEqual(['Quest of Erebor']);
  });

  it('does not include projects that have neither a client name or project name', () => {
    const MOCK_TEAM_MEMBERS_DATA_WITHOUT_CLIENT_PROJECT = {
      '0001': {
        currentProjects: [
          {
            client: '',
            project: null,
          },
        ],
      },
      '0002': {
        currentProjects: [
          {
            startDate: '2014-10-09',
            endDate: '2022-10-09',
          },
        ],
      },
      '0003': {
        currentProjects: [],
      },
    };

    const currentProjects = getUniqueCurrentProjects(MOCK_TEAM_MEMBERS_DATA_WITHOUT_CLIENT_PROJECT);

    expect(currentProjects).toEqual([]);
  });

  it('does not include projects with client names or project names of unexpected data types', () => {
    const MOCK_TEAM_MEMBERS_DATA_UNEXPECTED_DATA_TYPES = {
      '0001': {
        currentProjects: [
          {
            client: {
              name: 'Saruman',
            },
            project: ['Warden of Orthanc', 'White Council'],
            startDate: '2022-01-12',
            endDate: '2022-06-30',
          },
        ],
      },
      '0002': {
        currentProjects: [
          {
            client: true,
            project: 'Forging the Rings of Power',
          },
        ],
      },
      '0003': {
        currentProjects: [
          [
            { client: 'The Shire' },
            { project: 'Bilbo Baggins\' Birthday' },
          ],
        ],
      },
    };

    const currentProjects = getUniqueCurrentProjects(MOCK_TEAM_MEMBERS_DATA_UNEXPECTED_DATA_TYPES);

    expect(currentProjects).toEqual(['Forging the Rings of Power']);
  });
});
