export default function getUniqueRoles(teamMembers) {
  const roles = Object.keys(teamMembers).map((key) => {
    const role = teamMembers[key].role;
    if ((typeof role) === 'string') return role;
  });
  return [...new Set(roles)].filter((role) => role);
};
