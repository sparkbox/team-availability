import MOCK_DATA from '../mock-data/fellowship.json';
import apiService from './apiService';

const defaultFetchReference = global.fetch;
describe('apiService', () => {
  describe('getAllTeamMembers', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      }));
    });

    afterEach(() => {
      global.fetch = defaultFetchReference;
    });

    it('returns team members as an array of objects ', async () => {
      const actual = await apiService.getAllTeamMembers();
      expect(Array.isArray(actual)).toBe(true);
    });

    it('returns the team members id as part of the data object', async () => {
      const actual = await apiService.getAllTeamMembers();
      actual.forEach((obj) => {
        expect(obj).toHaveProperty('id');
      });
    });
  });

  describe('getTeamMemberById', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      }));
    });

    afterEach(() => {
      global.fetch = defaultFetchReference;
    });

    it('returns team member data that matches a given id', async () => {
      const id = Object.keys(MOCK_DATA)[0];
      const actual = await apiService.getTeamMemberById(id);
      expect(actual).toBe(MOCK_DATA[id]);
    });

    // falsy value is required for [id].jsx 404 page redirect
    it('returns falsy value if no team member is found', async () => {
      const id = 'badid';
      const actual = await apiService.getTeamMemberById(id);
      expect(actual).toBeFalsy();
    });
  });
});
