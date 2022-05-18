import getFullName from '../util/getFullName';
import TradingCard from './TradingCard';

export default function TradingCardGrid({ teamMembers }) {
  return (
    <div className="cmp-trading-card-grid">
      {teamMembers.map((member) => (
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
