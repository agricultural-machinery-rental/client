import { FC, useEffect, useState } from 'react';

import { convertUTCDateToRussianDateString } from '@/shared/lib';
import { TMachineryDto } from '@/shared/model/typing';
import { orderStatus, orderStatusRus } from '@/shared/orders';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchGetMachinery, getMachineries } from '@/shared/store/machineries';

import type { TBookingRow } from './typing';

export const BookingRow: FC<TBookingRow> = ({ orderData }) => {
  const [machinery, setMachinery] = useState<TMachineryDto>();
  const machineries = useAppSelector(getMachineries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const machineryData = machineries?.find(m => m.id === orderData.machinery);
    machineryData ? setMachinery(machineryData) : dispatch(fetchGetMachinery(orderData.machinery));
  }, [machineries, setMachinery, orderData, dispatch]);

  const startDate = convertUTCDateToRussianDateString(new Date(orderData.start_date), false);

  return (
    <>
      <div>{startDate}</div>
      <div>{machinery ? `${machinery.machinery.mark.brand} ${machinery.machinery.name}` : ''}</div>
      <div>{orderStatusRus[Number(orderData.status) as orderStatus]}</div>
      <div>50.000</div>
    </>
  );
};
