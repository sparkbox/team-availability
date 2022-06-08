import { useFilterContext } from '../context/FilterContext';
import { getStartAndEndDatesOfFutureWeeksByNumWeeksIntoFuture } from '../util/getDate';

export default function WeekSelect() {
  // Array of elements ranging from 0 to 11,  representing current week and 11 weeks into future
  const WEEK_OFFSET_VALUES = [...Array(12).keys()];
  const { weekOffset, setWeekOffset } = useFilterContext();

  const handleOnChange = (e) => {
    setWeekOffset(e.currentTarget.value);
  };

  return (
    <div className="cmp-week-select">
      <label>
        <span className="cmp-week-select__label">Week of </span>
        <select
          className="cmp-week-select__menu"
          name="weeks"
          onChange={(e) => handleOnChange(e)}
          defaultValue={weekOffset}
        >
          {WEEK_OFFSET_VALUES.map((weekOffsetValue) => {
            const { weekStart, weekEnd } = getStartAndEndDatesOfFutureWeeksByNumWeeksIntoFuture(
              weekOffsetValue,
            );

            return (
              <option
                key={weekOffsetValue}
                className="cmp-week-select__option"
                value={weekOffsetValue}
              >
                {`${weekStart} to ${weekEnd}`}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
