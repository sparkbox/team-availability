// order of keys in this array determines the order of the return array 
const skillKeys = [
  'technologies',
  "expertise",
  "strengths",
  "certifications",
  "interests",
];
const getSkillIndex = (skill) => skillKeys.indexOf(skill);

// conditional logic layer
const isArray = (data) => Array.isArray(data);
const isSkillKey = (key) => skillKeys.includes(key);
const isNotEmptyArray = (arr) => arr.length !== 0 && arr[0];

// data transform layer 
const removeDuplicateArrayValues = (values) =>[...new Set(values)];
const csvToArray = (data) => data.split(',');
const dataToArray = (data) => isArray(data) ? data : csvToArray(data);
const normalizeSkills =(skills) => removeDuplicateArrayValues(dataToArray(skills));

const toNormalizedData = ([key, value]) => ({
  category: key,
  index: getSkillIndex(key),
  skills: normalizeSkills(value),
})
const skillsDataSorter = (a, b) => a.index - b.index;
const nonSkillDataFilter = ([key]) => isSkillKey(key);
const noEmptySkillFilter = ({skills}) => isNotEmptyArray(skills);

// return skills as an array of string   
export const getSkills = (data) =>  
  Object.entries(data)
    .filter(nonSkillDataFilter)
    .map(toNormalizedData)
    .filter(noEmptySkillFilter)
    .sort(skillsDataSorter)
