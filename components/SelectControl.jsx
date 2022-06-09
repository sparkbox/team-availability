import { useFilterContext } from '../context/FilterContext';
import FieldsetGroup from './FieldsetGroup';

export default function SelectControl({ currentProjects }) {
  const { project, setProject } = useFilterContext();

  const handleChange = ({ target }) => {
    setProject(target.value);
  };

  return (
    <FieldsetGroup legend="Project">
      <label htmlFor="project-select" className="cmp-select-control__label">Project</label>
      <select
        id="project-select"
        className="cmp-select-control"
        name="projects"
        onChange={(e) => handleChange(e)}
      >
        <option
          className="cmp-select-control__option"
          value="all"
          selected={(project === 'all')}
        >
          All Projects
        </option>
        {currentProjects.map((currentProject) => (
          <option
            key={currentProject}
            className="cmp-select-control__option"
            value={currentProject}
            selected={(project === currentProject)}
          >
            {currentProject}
          </option>
        ))}
      </select>
    </FieldsetGroup>
  );
}
