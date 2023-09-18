export const convertUTCDateToRussianDateString = (date: Date, year: boolean = true) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  if (year) options.year = 'numeric';

  return date.toLocaleDateString('ru', options);
};
