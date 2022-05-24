import { availabilityOptions, useFilterContext } from '../context/FilterContext';
import getFullName from '../util/getFullName';
import TradingCard from './TradingCard';

export default function TradingCardGrid({ teamMembers }) {
  const { project, roles, availability } = useFilterContext();

  const filteredTeamMembers = teamMembers.filter((member) => {
    const hasHoursAvailable = member.weeklyCapacity - member.forecastedHours > 0;

    if (!hasHoursAvailable && availability === availabilityOptions.AVAILABLE) return false;
    if (hasHoursAvailable && availability === availabilityOptions.UNAVAILABLE) return false;

    if (roles.length && !roles.includes(member.jobTitle)) return false;

    if (project !== 'all' && member.project !== project) return false;

    return true;
  });

  return (
    <div className="cmp-trading-card-grid">
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
    </div>
  );
}
