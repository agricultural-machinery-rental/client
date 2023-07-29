import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TDateRange } from './typing';
import { StDateRangeWrapper } from './styled';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);
import ArrowSGV from '@/assets/icons/arrow.svg';

export const DateRange: FC<TDateRange> = ({ name, required, placeholder, register }) => {
  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);
  const [startDate, endDate] = dateRange;

  const minDate = new Date();

  return (
    <StDateRangeWrapper>
      <ArrowSGV />
      <DatePicker
        locale='ru'
        dateFormat='dd MMMM yyyy'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={update => {
          setDateRange(update);
        }}
        minDate={minDate}
        placeholderText={placeholder}
        required={required}
        {...register?.(name)}
      />
    </StDateRangeWrapper>
  );
};
