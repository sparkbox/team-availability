import Image from 'next/image';
import getClassColorModifierString from '../util/getClassColorModifierString';

export default function TradingCardImage({ imageUrl, weeklyCapacity, forecastedHours }) {
  const classColorModifier = getClassColorModifierString(weeklyCapacity, forecastedHours);

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
        <span aria-hidden="true">
          <span className="cmp-trading-card-image__hours">{weeklyCapacity - forecastedHours}</span>
          {' '}
          hrs
        </span>
      </div>
    </div>
  );
}
