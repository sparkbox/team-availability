const getAllTeamMembers = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  const dataAsArrayOfObjects = Object.keys(data).map((key) => (
    {
      id: key,
      ...data[key],
    }
  ));

  return dataAsArrayOfObjects;
};

const getTeamMemberById = async (url, identifier) => {
  const response = await fetch(url + identifier);
  const data = await response.json();

  return data[identifier];
};

const apiService = {
  getAllTeamMembers,
  getTeamMemberById,
};

export default apiService;
