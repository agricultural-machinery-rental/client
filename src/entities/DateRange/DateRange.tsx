import { FC, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TDateRange } from './typing';
import { StDateRangeWrapper } from './styled';
import ArrowSGV from './assets/arrow.svg';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

export const DateRange: FC<TDateRange> = ({ name, required, placeholder, setValue }) => {
  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);
  const [startDate, endDate] = dateRange;

  const minDate = new Date();

  useEffect(() => {
    const dateRangeValue = () => {
      if (!startDate || !endDate) return '';
      return `${startDate?.toDateString()} - ${endDate?.toDateString()}`;
    };
    setValue?.(name, dateRangeValue());
  }, [name, setValue, startDate, endDate]);

  return (
    <StDateRangeWrapper>
      <ArrowSGV />
      <DatePicker
        locale='ru'
        dateFormat='dd MMMM yyyy'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        minDate={minDate}
        onChange={update => {
          setDateRange(update);
          console.log(update);
        }}
        placeholderText={placeholder}
        required={required}
      />
    </StDateRangeWrapper>
  );
};
