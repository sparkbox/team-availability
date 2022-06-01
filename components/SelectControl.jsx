import { useFilterContext } from '../context/FilterContext';

export default function SelectControl({ currentProjects }) {
  const { setProject } = useFilterContext();

  const handleChange = ({ target }) => {
    setProject(target.value);
  };

  return (
    <div className="cmp-select-control">
      <label>
        <span className="cmp-select-control__label">Project</span>
        <select
          className="cmp-select-control__menu"
          name="projects"
          onChange={(e) => handleChange(e)}
        >
          <option className="cmp-select-control__option" value="all">All Projects</option>
          {currentProjects.map((project) => (
            <option key={project} className="cmp-select-control__option" value={project}>{project}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
