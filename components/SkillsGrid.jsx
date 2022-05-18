export default function SkillsGrid({ skilldata }) {
  return (
    <section aria-labelledby="Skills-Header" className="cmp-skills-grid">
      <h2 id="Skills-Header" className="cmp-skills-grid__heading">Skills</h2>
      <div className="obj-skills-grid">
        {skilldata && skilldata.map((data) => (
          <div key={data.category} className="cmp-skills-grid__category">
            <h3 className="cmp-skills-grid__category-title">{data.category}</h3>
            <div>
              {data.skills && data.skills.map((skill) => <span key={skill} className="cmp-skills-grid__skill">{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
