import ru from 'date-fns/locale/ru';
import { FC, useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import CalendarSGV from './assets/calender.svg';
import { StDateRangeWrapper } from './styled';
import { TDateRange } from './typing';

registerLocale('ru', ru);

export const DateRange: FC<TDateRange> = ({
  name,
  required,
  placeholder,
  setValue,
  forceDefaultValue,
}) => {
  const [dateRange, setDateRange] = useState<(Date | null)[]>([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const minDate = new Date();

  useEffect(() => {
    if (forceDefaultValue instanceof Array) {
      setDateRange(forceDefaultValue);
    }
  }, [forceDefaultValue]);

  useEffect(() => {
    if (startDate && endDate && name && setValue) {
      setValue(name, [startDate, endDate]);
    }
  }, [name, setValue, startDate, endDate]);

  return (
    <StDateRangeWrapper>
      <CalendarSGV />
      <DatePicker
        locale='ru'
        dateFormat='dd.MM.yyyy'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        minDate={minDate}
        onChange={update => {
          setDateRange(update);
        }}
        placeholderText={placeholder}
        required={required}
      />
    </StDateRangeWrapper>
  );
};
