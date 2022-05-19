
const hasPastClients = (pastProjects) => pastProjects.length !== 0 && pastProjects[0];
const removeDuplicateClients = (values) =>[...new Set(values)];

export const getPastClients = (data) =>
  hasPastClients(data.pastProjects) ? removeDuplicateClients(data.pastProjects): null;
  