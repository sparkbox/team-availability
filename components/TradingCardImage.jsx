import Image from 'next/image';
import { useFilterContext } from '../context/FilterContext';
import getClassColorModifierString from '../util/getClassColorModifierString';
import getForecastedHoursIdx from '../util/getForecastedHoursIdx';

export default function TradingCardImage({ imageUrl, weeklyCapacity, forecastedHours }) {
  const { weekOffset } = useFilterContext();
  const idx = getForecastedHoursIdx(weekOffset);
  const classColorModifier = getClassColorModifierString(weeklyCapacity, forecastedHours[idx]);

  return (
    <div className="cmp-trading-card-image">
      <div className={`cmp-trading-card-image__overlay cmp-trading-card-image__overlay--${classColorModifier}`}>
        <div className={`cmp-trading-card-image__image cmp-trading-card-image__image--${classColorModifier}`}>
          <Image
            src={imageUrl}
            loading="lazy"
            layout="responsive"
            width={350}
            height={350}
            alt=""
          />
        </div>
      </div>
      <div className={`cmp-trading-card-image__hours-container cmp-trading-card-image__hours-container--${classColorModifier}`}>
        <span>
          <span className="cmp-trading-card-image__hours">{weeklyCapacity - forecastedHours[idx]}</span>
          {' '}
          hrs
        </span>
      </div>
    </div>
  );
}
