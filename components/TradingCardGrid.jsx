import { useEffect, useState } from 'react';
import { availabilityOptions, useFilterContext } from '../context/FilterContext';
import { useViewContext } from '../context/ViewContext';
import getFullName from '../util/getFullName';
import getForecastedHoursIdx from '../util/getForecastedHoursIdx';
import Show from './Show';
import TradingCard from './TradingCard';
import TradingCardNumResults from './TradingCardNumResults';
import ViewToggle from './ViewToggle';

const classes = {
  FADEOUT: 'cmp-trading-card-grid__grid--fadeout',
  HIDDEN: 'cmp-trading-card-grid__grid--hidden',
  FADEIN: 'cmp-trading-card-grid__grid--fadein',
};

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
    const filterTeamMembers = (allTeamMembers) => (
      allTeamMembers.filter((member) => {
        const hoursIdx = getForecastedHoursIdx(weekOffset);
        const hasHoursAvailable = member.weeklyCapacity - member.forecastedHours[hoursIdx] > 0;

        if (!hasHoursAvailable && availability === availabilityOptions.AVAILABLE) return false;
        if (hasHoursAvailable && availability === availabilityOptions.UNAVAILABLE) return false;

        if (roles.length && !roles.includes(member.role)) return false;

        const memberProjects = member.currentProjects.map(
          (currentProject) => currentProject.project,
        );

        if (project !== 'all' && !(memberProjects.includes(project))) return false;

        return true;
      })
    );

    const newFilteredTeamMembers = filterTeamMembers(teamMembers);

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
        <TradingCardNumResults
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
