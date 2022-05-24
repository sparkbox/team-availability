import getFormattedDate from '../util/getFormattedDate';
import Show from './Show';

export default function CurrentProjects({ currentProjects }) {
  const renderCurrentProjectsTableRows = (projects) => (
    projects.map((project) => {
      const startDateString = getFormattedDate(project.startDate);
      const endDateString = getFormattedDate(project.endDate);

      return (
        <tr key={project.project} className="cmp-current-projects__table-body-row">
          <th
            scope="row"
            className="cmp-current-projects__table-body-cell-header"
          >
            {project.project}
          </th>
          <td className="cmp-current-projects__table-body-cell">
            <span className="cmp-current-projects__label">Client: </span>
            {project.client}
          </td>
          <td className="cmp-current-projects__table-body-cell">
            <span className="cmp-current-projects__label">Start: </span>
            {startDateString}
          </td>
          <td className="cmp-current-projects__table-body-cell">
            <span className="cmp-current-projects__label">End: </span>
            {endDateString}
          </td>
        </tr>
      );
    })
  );

  return (
    <section className="cmp-current-projects" aria-labelledby="current-projects">
      <h2 id="current-projects" className="cmp-current-projects__header cmp-current-projects__header--heading">Current Projects</h2>
      <Show when={!currentProjects.length}>
        <p className="cmp-current-projects__status">This team member is not currently on a client project.</p>
      </Show>

      <Show when={currentProjects.length}>
        <table className="cmp-current-projects__table" aria-labelledby="current-projects">
          <thead className="cmp-current-projects__table-head">
            <tr className="cmp-current-projects__table-header-row">
              <th scope="col" className="cmp-current-projects__table-header-cell">Project</th>
              <th scope="col" className="cmp-current-projects__table-header-cell">Client</th>
              <th scope="col" className="cmp-current-projects__table-header-cell">Start</th>
              <th scope="col" className="cmp-current-projects__table-header-cell">End</th>
            </tr>
          </thead>
          <tbody className="cmp-current-projects__table-body">
            {renderCurrentProjectsTableRows(currentProjects)}
          </tbody>
        </table>
      </Show>
    </section>
  );
}
