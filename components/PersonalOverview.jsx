export default function PersonalOverview({
  name, jobTitle, cohortStatus, children,
}) {
  return (
    <div className="obj-personal-overview">
      <section className="cmp-personal-overview" aria-labelledby="team-member">
        <h1 id="team-member" className="cmp-personal-overview__name">
          {name}
        </h1>
        <p className="cmp-personal-overview__title">
          {jobTitle}
        </p>
        <p className="cmp-personal-overview__cohort">
          {cohortStatus}
        </p>
      </section>

      {children}
    </div>
  );
}
