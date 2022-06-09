import { useFilterContext } from '../context/FilterContext';
import getClassColorModifierString from '../util/getClassColorModifierString';
import getForecastedHoursIdx from '../util/getForecastedHoursIdx';

export default function HoursBar({ forecastedHours, weeklyCapacity }) {
  const { weekOffset } = useFilterContext();
  const idx = getForecastedHoursIdx(weekOffset);

  const fillRatioStyles = ({
    '--fill-ratio': `${((weeklyCapacity - forecastedHours[idx]) / weeklyCapacity)}`,
  });

  return (
    <div className="cmp-hours-bar">
      <div style={fillRatioStyles} className={`cmp-hours-bar__fill  cmp-hours-bar__fill--fill-${getClassColorModifierString(weeklyCapacity, forecastedHours[idx])}`} />
    </div>
  );
}
