export default function getUniqueCurrentProjects(teamMembers) {
  const projectsList = Object.keys(teamMembers)
    .map((key) => teamMembers[key].currentProjects)
    .flat();

  const projectNamesList = projectsList.flatMap((project) => {
    const { project: projectName, client: projectClient } = project;

    switch (true) {
      case (!projectName && !projectClient):
        return [];
      case (!projectName):
        return ((typeof projectClient) === 'string')
          ? [`Unnamed ${projectClient} Project`]
          : [];
      case ((typeof projectName) !== 'string'):
        return [];
      default:
        return [projectName];
    }
  });

  const uniqueProjects = [...new Set(projectNamesList)];

  const sortedUniqueProjects = uniqueProjects.sort();

  return sortedUniqueProjects;
}
