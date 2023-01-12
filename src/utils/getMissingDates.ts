// Returns an array of dates between the two dates
export const getMissingDates = (startDate: Date, endDate: Date) => {
  const dates = [];
  let currentDate = startDate;
  const addDays = function (this: Date, days: number) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
};
