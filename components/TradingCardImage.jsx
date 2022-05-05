import Image from 'next/image';
import getClassColorModifierString from '../util/getClassColorModifierString';

export default function TradingCardImage({ imageUrl, hours }) {
  const classColorModifier = getClassColorModifierString(hours);

  return (
    <div className="cmp-trading-card-image">
      <div className={`cmp-trading-card-image__overlay cmp-trading-card-image__overlay--${classColorModifier}`}>
        <div className={`cmp-trading-card-image__image cmp-trading-card-image__image--${classColorModifier}`}>
          <Image
            src={imageUrl}
            height={350}
            width={350}
            alt={imageUrl}
          />
        </div>
      </div>
      <div className={`cmp-trading-card-image__hours-container cmp-trading-card-image__hours-container--${classColorModifier}`}>
        <span>
          <span className="cmp-trading-card-image__hours">{hours}</span>
          {' '}
          hrs
        </span>
      </div>
    </div>
  );
}