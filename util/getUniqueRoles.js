const sortByLength = (a, b) => a.length - b.length;
const noFalsyRoles = (role) => role;
const noDuplicateRoles = (roles) => [...new Set(roles)];

export default function getUniqueRoles(teamMembers) {
  const roles = Object.keys(teamMembers).map((key) => {
    const role = teamMembers[key].role;
    if ((typeof role) === 'string') return role;
  });
  return noDuplicateRoles(roles).filter(noFalsyRoles).sort(sortByLength);
};
