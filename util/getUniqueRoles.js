export default function getUniqueRoles(teamMembers) {
  const roles = Object.keys(teamMembers).flatMap((key) => {
    const role = teamMembers[key].jobTitle;

    if ((typeof role) === 'string') return [role];
    return [];
  });

  const uniqueRoles = [...new Set(roles)].filter((role) => role);

  return uniqueRoles;
}
