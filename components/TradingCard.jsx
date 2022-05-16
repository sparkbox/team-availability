import Link from 'next/link';
import HoursBar from './HoursBar';
import TradingCardImage from './TradingCardImage';

export default function TradingCard({
  photo, forecastedHours, name, jobTitle, id, weeklyCapacity,
}) {
  return (
    <div className="cmp-trading-card">
      <TradingCardImage
        imageUrl={photo}
        weeklyCapacity={weeklyCapacity}
        forecastedHours={forecastedHours}
      />
      <div className="cmp-trading-card__hrs-bar">
        <HoursBar forecastedHours={forecastedHours} weeklyCapacity={weeklyCapacity} />
      </div>
      <Link href={`/${id}`} passHref>
        <a href="replace">
          <span className="cmp-trading-card__name">{name}</span>
        </a>
      </Link>
      <p className="cmp-trading-card__title">{jobTitle}</p>
    </div>
  );
}