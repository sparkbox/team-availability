import Image from 'next/image';
import getClassColorModifierString from '../util/getClassColorModifierString';

export default function ProfilePhoto({ imageUrl, weeklyCapacity, forecastedHours }) {
  const classColorModifier = getClassColorModifierString(weeklyCapacity, forecastedHours);

  return (
    <div className="cmp-profile-photo">
      <div className={`cmp-profile-photo__background cmp-profile-photo__background--${classColorModifier}`}>
        <div className={`cmp-profile-photo__overlay cmp-profile-photo__overlay--${classColorModifier}`}>
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
      <div className={`cmp-profile-photo__hours cmp-profile-photo__hours--${classColorModifier}`}>
        <span aria-hidden="true">
          <span className="cmp-profile-photo__hours-text">{weeklyCapacity - forecastedHours}</span>
          {' '}
          hrs
        </span>
      </div>
    </div>
  );
}
