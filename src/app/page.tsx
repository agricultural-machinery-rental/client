'use client';

import { ChosenUs } from '@/components/ChosenUs/ChosenUs';
import { CategoryItemList } from '@/shared/CategoryItemList/CategoryItemList';
import { chosenUsData } from '@/utils/chosenUsData';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <CategoryItemList />
      <ChosenUs data={chosenUsData} />
    </main>
  );
}
