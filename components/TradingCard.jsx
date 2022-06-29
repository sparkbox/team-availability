import Link from 'next/link';
import HoursBar from './HoursBar';
import ProfilePhoto from './ProfilePhoto';
import getClassColorModifierString from '../util/getClassColorModifierString';

export default function TradingCard({
  photo, forecastedHours, name, jobTitle, id, weeklyCapacity,
}) {
  const classColorModifier = getClassColorModifierString(weeklyCapacity, forecastedHours);

  return (
    <Link href={`/${id}`} passHref>
      <a href="replace" className="cmp-trading-card">
        <ProfilePhoto
          imageUrl={photo}
          weeklyCapacity={weeklyCapacity}
          forecastedHours={forecastedHours}
        />
        <HoursBar forecastedHours={forecastedHours} weeklyCapacity={weeklyCapacity} />
        <div>
          <span className="cmp-trading-card__name">{name}</span>
          <p className="cmp-trading-card__title">{jobTitle}</p>
        </div>
        <span className={`cmp-trading-card__hrs cmp-trading-card__hrs--${classColorModifier}`}>{`${weeklyCapacity - forecastedHours}hrs`}</span>
      </a>
    </Link>
  );
}
