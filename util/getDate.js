const SundayFormat = new Intl.DateTimeFormat("en" , {
  month: "short",
  day: 'numeric',
  year: 'numeric',
});

const MondayFormat = new Intl.DateTimeFormat("en" , {
  month: "short",
  day: 'numeric',
});

const isSunday = (date) => date.getDay() === 0;
const daysToMonday = (date) => isSunday(date)? 6 : date.getDay() -1
const daysToSunday = (date) => isSunday(date)? 0 : 7 - date.getDay();

export const getMonday = (date) => {
  const monday = new Date(date.valueOf());
  monday.setDate(date.getDate() - daysToMonday(date));
  return MondayFormat.format(monday);
}

export const getSunday = (date) => {
  const sunday = new Date(date.valueOf());
  sunday.setDate(date.getDate() + daysToSunday(date));
  return SundayFormat.format(sunday);
}


export const getDate = () => {
  const today = new Date();
  return {
    weekStart: getMonday(today),
    weekEnd: getSunday(today),
  };
};
