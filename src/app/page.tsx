'use client';

import { ChosenUs } from '@/components/ChosenUs/ChosenUs';
import { chosenUsData } from '@/utils/chosenUsData';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ChosenUs data={chosenUsData} />
    </>
  );
}
