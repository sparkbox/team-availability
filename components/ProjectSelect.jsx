import { useFilterContext } from '../context/FilterContext';
import FieldsetGroup from './FieldsetGroup';

export default function ProjectSelect({ currentProjects }) {
  const { setProject } = useFilterContext();

  const handleChange = ({ target }) => {
    setProject(target.value);
  };

  return (
    <FieldsetGroup legend="Project">
      <label htmlFor="project-select" className="cmp-project-select__label">Project</label>
      <select
        id="project-select"
        className="cmp-project-select"
        name="projects"
        defaultValue="all"
        onChange={(e) => handleChange(e)}
      >
        <option
          className="cmp-project-select__option"
          value="all"
        >
          All Projects
        </option>
        {currentProjects.map((currentProject) => (
          <option
            key={currentProject}
            className="cmp-project-select__option"
            value={currentProject}
          >
            {currentProject}
          </option>
        ))}
      </select>
    </FieldsetGroup>
  );
}
