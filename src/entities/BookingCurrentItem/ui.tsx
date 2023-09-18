import { FC, useEffect, useState } from 'react';

import { convertUTCDateToRussianDateString } from '@/shared/lib';
import { TMachineryDto } from '@/shared/model/typing';
import defaultImage from '@/shared/photos/no_image.png';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchGetMachinery, getMachineries } from '@/shared/store/machineries';
import { BookingItem } from '@/shared/ui/BookingItem';

import { type TBookingCurrentItem } from './typing';

const BookingCurrentItem: FC<TBookingCurrentItem> = ({ children, orderData }) => {
  const [machinery, setMachinery] = useState<TMachineryDto>();
  const machineries = useAppSelector(getMachineries);
  const dispatch = useAppDispatch();

  const startDate = convertUTCDateToRussianDateString(new Date(orderData.start_date), false);
  const endDate = convertUTCDateToRussianDateString(new Date(orderData.end_date), false);

  useEffect(() => {
    const machineryData = machineries?.find(m => m.id === orderData.machinery);
    machineryData ? setMachinery(machineryData) : dispatch(fetchGetMachinery(orderData.machinery));
  }, [machineries, setMachinery, orderData, dispatch]);

  return (
    <BookingItem
      photo={machinery?.images[0]?.image ?? defaultImage.src}
      name={
        machinery
          ? `${machinery.machinery.category} ${machinery.machinery.mark.brand} ${machinery.machinery.name}`
          : ''
      }
      dates={`Забронирован с ${startDate} по ${endDate}`}
      comment={orderData.comment}
    >
      {children}
    </BookingItem>
  );
};

export { BookingCurrentItem };
