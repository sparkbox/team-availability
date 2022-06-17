import Link from 'next/link';
import HoursBar from './HoursBar';
import TradingCardImage from './TradingCardImage';
import { useFilterContext } from '../context/FilterContext';
import getForecastedHoursIdx from '../util/getForecastedHoursIdx';
import getClassColorModifierString from '../util/getClassColorModifierString';

export default function TradingCard({
  photo, forecastedHours, name, jobTitle, id, weeklyCapacity,
}) {
  const { weekOffset } = useFilterContext();
  const idx = getForecastedHoursIdx(weekOffset);
  const classColorModifier = getClassColorModifierString(weeklyCapacity, forecastedHours[idx]);

  return (
    <Link href={`/${id}`} passHref>
      <a href="replace" className="cmp-trading-card">
        <TradingCardImage
          imageUrl={photo}
          weeklyCapacity={weeklyCapacity}
          forecastedHours={forecastedHours[idx]}
        />
        <div className="cmp-trading-card__hrs-bar">
          <HoursBar forecastedHours={forecastedHours[idx]} weeklyCapacity={weeklyCapacity} />
        </div>
        <div>
          <span className="cmp-trading-card__name">{name}</span>
          <p className="cmp-trading-card__title">{jobTitle}</p>
        </div>
        <span className={`cmp-trading-card__hrs cmp-trading-card__hrs--${classColorModifier}`}>{`${weeklyCapacity - forecastedHours[idx]}hrs`}</span>
      </a>
    </Link>
  );
}
