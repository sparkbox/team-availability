import teamMembers from '../mock-data/fellowship.json';

const getAllTeamMembers = async () => {
  const dataAsArrayOfObjects = Object.keys(teamMembers).map((key) => (
    {
      id: key,
      ...teamMembers[key],
    }
  ));

  return dataAsArrayOfObjects;
};

const getTeamMemberById = async (identifier) => teamMembers[identifier];

const apiService = {
  getAllTeamMembers,
  getTeamMemberById,
};

export default apiService;
