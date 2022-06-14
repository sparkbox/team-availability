import { useEffect, useState } from 'react';
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
  const [index, setIndex] = useState(0);
  const classColorModifier = getClassColorModifierString(weeklyCapacity, forecastedHours[index]);

  useEffect(() => {
    setTimeout(() => {
      setIndex(getForecastedHoursIdx(weekOffset));
    }, 450);
  }, [index, weekOffset]);

  return (
    <Link href={`/${id}`} passHref>
      <a href="replace" className="cmp-trading-card">
        <TradingCardImage
          imageUrl={photo}
          weeklyCapacity={weeklyCapacity}
          forecastedHours={forecastedHours[index]}
        />
        <div className="cmp-trading-card__hrs-bar">
          <HoursBar forecastedHours={forecastedHours[index]} weeklyCapacity={weeklyCapacity} />
        </div>
        <div>
          <span className="cmp-trading-card__name">{name}</span>
          <p className="cmp-trading-card__title">{jobTitle}</p>
        </div>
        <span className={`cmp-trading-card__hrs cmp-trading-card__hrs--${classColorModifier}`}>{`${weeklyCapacity - forecastedHours[index]}hrs`}</span>
      </a>
    </Link>
  );
}
