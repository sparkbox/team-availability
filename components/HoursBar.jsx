import getClassColorModifierString from '../util/getClassColorModifierString';

export default function HoursBar({ forecastedHours, weeklyCapacity }) {
  const fillRatioStyles = ({
    '--fill-ratio': `${((weeklyCapacity - forecastedHours) / weeklyCapacity)}`,
  });

  return (
    <div className="cmp-hours-bar">
      <div style={fillRatioStyles} className={`cmp-hours-bar__fill  cmp-hours-bar__fill--fill-${getClassColorModifierString(weeklyCapacity, forecastedHours)}`} />
    </div>
  );
}
