import { useEffect, useState } from 'react';
import { availabilityOptions, useFilterContext } from '../context/FilterContext';
import { useViewContext } from '../context/ViewContext';
import getFullName from '../util/getFullName';
import getForecastedHoursIdx from '../util/getForecastedHoursIdx';
import Show from './Show';
import TradingCard from './TradingCard';
import FilterResults from './FilterResults';
import ViewToggle from './ViewToggle';

const classes = {
  FADEOUT: 'cmp-trading-card-grid__grid--fadeout',
  HIDDEN: 'cmp-trading-card-grid__grid--hidden',
  FADEIN: 'cmp-trading-card-grid__grid--fadein',
};

const AVAILABILITY_CUTOFF = 16;

export default function TradingCardGrid({ teamMembers }) {
  const {
    project, roles, availability, weekOffset,
  } = useFilterContext();
  const {
    view, setView, layoutContainerRef,
  } = useViewContext();
  const [filteredTeamMembers, setFilteredTeamMembers] = useState(teamMembers);
  const [gridClassModifier, setGridClassModifier] = useState(classes.HIDDEN);
  const [isChangingView, setIsChangingView] = useState();

  const handleChangeView = (viewString) => {
    setIsChangingView(true);
    setTimeout(() => {
      setView(viewString);
      setIsChangingView(false);
    }, 450);
  };

  useEffect(() => {
    // eslint-disable-next-line max-len
    const isAvailable = (member) => member.weeklyCapacity - member.forecastedHours > AVAILABILITY_CUTOFF;
    const availabilityFilter = (member) => {
      if (availability.length === 0 || availability.length === 2) return true;
      return availability.includes(availabilityOptions.AVAILABLE) === isAvailable(member);
    };

    const roleFilter = (member) => roles.length === 0 || roles.includes(member.role);

    const hasProject = (member) => member.currentProjects.some((cp) => cp.project === project);
    const projectFilter = (member) => project === 'all' || hasProject(member);

    const hoursIdx = getForecastedHoursIdx(weekOffset);
    const teamMembersWithHours = teamMembers.map((member) => ({
      ...member,
      forecastedHours: member.forecastedHours[hoursIdx],
    }));

    const newFilteredTeamMembers = teamMembersWithHours
      .filter(availabilityFilter).filter(roleFilter).filter(projectFilter);

    if (gridClassModifier === classes.HIDDEN) {
      setFilteredTeamMembers(newFilteredTeamMembers);
      setTimeout(() => {
        setGridClassModifier(classes.FADEIN);
      }, 450);
    } else {
      setGridClassModifier(classes.FADEOUT);
      setTimeout(() => {
        setFilteredTeamMembers(newFilteredTeamMembers);
        setGridClassModifier(classes.FADEIN);
      }, 450);
    }

  // Including `gridClasses` in useEffect dependencies causes infinite rerender
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamMembers, project, roles, availability, weekOffset]);

  useEffect(() => {
    setGridClassModifier(classes.FADEOUT);
    setTimeout(() => {
      setGridClassModifier(classes.FADEIN);
    }, 450);
  }, [isChangingView]);

  useEffect(() => {
    if (layoutContainerRef.current.clientWidth < 640) {
      setView('list');
    }
  }, [layoutContainerRef, setView]);

  return (
    <div className="cmp-trading-card-grid" data-view={view}>
      <div className="cmp-trading-card-grid__heading">
        <FilterResults
          numResults={filteredTeamMembers.length}
          numTotal={teamMembers.length}
        />
        <ViewToggle
          currentView={view}
          onChangeView={handleChangeView}
        />
      </div>
      <div className={`cmp-trading-card-grid__grid ${gridClassModifier}`}>
        <Show when={!!filteredTeamMembers.length}>
          {filteredTeamMembers.map((member) => (
            <article
              key={member.id}
            >
              <TradingCard
                photo={member.photo}
                weeklyCapacity={member.weeklyCapacity}
                forecastedHours={member.forecastedHours}
                name={getFullName(member)}
                jobTitle={member.jobTitle}
                id={member.id}
              />
            </article>
          ))}
        </Show>
      </div>
    </div>
  );
}
