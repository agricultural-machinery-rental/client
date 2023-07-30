'use client';

import { ChosenUs } from '@/components/ChosenUs/ChosenUs';
import { chosenUsData } from '@/utils/chosenUsData';
import { InfoConditions } from '@/components/InfoConditions/InfoConditions';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ChosenUs data={chosenUsData} />
      <InfoConditions />
    </main>
  );
}
