import getClassColorModifierString from '../util/getClassColorModifierString';

export default function TradingCardImage({ imageUrl, hours }) {
  const classColorModifier = getClassColorModifierString(hours);

  return (
    <div className="cmp-trading-card-image">
      <div className={`cmp-trading-card-image__overlay cmp-trading-card-image__overlay--${classColorModifier}`}>
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
          className={`cmp-trading-card-image__image cmp-trading-card-image__image--${classColorModifier}`}
          role="img"
          title={imageUrl}
        />
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
