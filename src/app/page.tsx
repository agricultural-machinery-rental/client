'use client';

import { CategoryItemList } from '@/widgets/CategoryItemList';
import { chosenUsData, ChosenUs } from '@/widgets/company/ChosenUs';
import { InfoConditions } from '@/widgets/company/InfoConditions';

export default function Home() {
  return (
    <>
      <CategoryItemList />
      <ChosenUs data={chosenUsData} />
      <InfoConditions />
    </>
  );
}
