export const toRuDateString = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('ru', options);
};
