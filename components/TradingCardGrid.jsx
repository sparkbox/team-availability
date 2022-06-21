import { useEffect } from 'react';
import { availabilityOptions, useFilterContext } from '../context/FilterContext';
import getFullName from '../util/getFullName';
import getForecastedHoursIdx from '../util/getForecastedHoursIdx';
import TradingCard from './TradingCard';
import Show from './Show';
import TradingCardNumResults from './TradingCardNumResults';
import ViewToggle from './ViewToggle';

export default function TradingCardGrid({ teamMembers }) {
  const {
    project, roles, availability, weekOffset, view, setView, layoutContainerRef,
  } = useFilterContext();

  const hoursIdx = getForecastedHoursIdx(weekOffset);

  const filteredTeamMembers = teamMembers.filter((member) => {
    const hasHoursAvailable = (member.weeklyCapacity - member.forecastedHours[hoursIdx]) > 0;

    if (!hasHoursAvailable && availability === availabilityOptions.AVAILABLE) return false;
    if (hasHoursAvailable && availability === availabilityOptions.UNAVAILABLE) return false;

    if (roles.length && !roles.includes(member.role)) return false;

    const memberProjects = member.currentProjects.map((currentProject) => currentProject.project);

    if (project !== 'all' && !(memberProjects.includes(project))) return false;

    return true;
  });

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
        <ViewToggle />
      </div>
      <div className="cmp-trading-card-grid__grid">

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
