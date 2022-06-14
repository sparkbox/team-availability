const getForecastedHoursIdx = (weekOffset) => {
  const idx = (weekOffset % 2 === 0)
    ? 0
    : 1;

  return idx;
};

export default getForecastedHoursIdx;
