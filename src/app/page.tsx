'use client';

import { ChosenUs } from '@/components/ChosenUs/ChosenUs';
import { CategoryItemList } from '@/widgets/CategoryItemList';
import { chosenUsData } from '@/utils/chosenUsData';
import { InfoConditions } from './widgets/InfoConditions';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <CategoryItemList />
      <ChosenUs data={chosenUsData} />
      <InfoConditions />
    </>
  );
}
