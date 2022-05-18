import { getSkills } from './getSkills';

describe('getSKills', () => {

  it('returns an arry of strings',  () => {
    const testData = {
      certifications: [
        "CPWA",
        "AWS"
      ],
      technologies: "JavaScript, Elvish",
      expertise: "Mentorship, swords, bows, horses",
      strengths: "Leading teams, Fighting monsters",
      interests: "Camping every weekend, singing, playing guitar",
    }
    const skills = getSkills(testData);
    expect(Array.isArray(skills));
  });

  it('does not return non-skill data', () => {
    const testData = {
      certifications: [
        "CPWA",
        "AWS"
      ],      
      firstName: "Aragorn II",
      lastName: "Elessar",
    }
    const expectedResult = [{"category": "certifications", "index": 3, "skills": ["CPWA", "AWS"]}];
    const unwantedResult = [{"category": "certifications", "index": 3, "skills": ["CPWA", "AWS"]}, {"category": "firstName", "skills":["Aragorn II"]}, {"category":"lastName", "skills":["Elessar"]}];
    const result = getSkills(testData);
    expect(result).toEqual(
      expect.arrayContaining(expectedResult),
      expect.not.arrayContaining(unwantedResult),
    );
  });

  it('returns only skills if duplicates exisit in the same category', () => {
    const testData = {
      certifications: [
        "CPWA",
        "AWS",
        "AWS"
      ]   
    };
    const expectedResult = [{"category": "certifications", "index": 3, "skills": ["CPWA", "AWS"]}];
    const result = getSkills(testData);
    expect(result).toEqual(
      expect.arrayContaining(expectedResult),
    );
  })
});
