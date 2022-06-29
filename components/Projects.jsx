import getFormattedDate from '../util/getFormattedDate';
import Show from './Show';

export default function Projects({ currentProjects }) {
  const renderProjectsTableRows = (projects) => (
    projects.map((project) => {
      const startDateString = getFormattedDate(project.startDate);
      const endDateString = getFormattedDate(project.endDate);

      return (
        <tr key={project.project} className="cmp-projects__body-row">
          <th
            scope="row"
            className="cmp-projects__body-cell-header"
          >
            <span className="cmp-projects__header-label">Client</span>
            {project.client}
          </th>
          <td className="cmp-projects__body-cell">
            <span className="cmp-projects__label">Project: </span>
            {project.project}
          </td>
          <td className="cmp-projects__body-cell">
            <span className="cmp-projects__label">Start: </span>
            {startDateString}
          </td>
          <td className="cmp-projects__body-cell">
            <span className="cmp-projects__label">End: </span>
            {endDateString}
          </td>
        </tr>
      );
    })
  );

  return (
    <section className="cmp-projects" aria-labelledby="current-projects">
      <h2 id="current-projects" className="cmp-projects__header">Current Projects</h2>

      <Show when={!currentProjects.length}>
        <p className="cmp-projects__status">This team member is not currently on a client project.</p>
      </Show>

      <Show when={currentProjects.length}>
        <table className="cmp-projects__table" aria-labelledby="current-projects">
          <thead className="cmp-projects__table-head">
            <tr className="cmp-projects__header-row">
              <th scope="col" className="cmp-projects__header-cell">Client</th>
              <th scope="col" className="cmp-projects__header-cell">Project</th>
              <th scope="col" className="cmp-projects__header-cell">Start</th>
              <th scope="col" className="cmp-projects__header-cell">End</th>
            </tr>
          </thead>
          <tbody className="cmp-projects__table-body">
            {renderProjectsTableRows(currentProjects)}
          </tbody>
        </table>
      </Show>
    </section>
  );
}
