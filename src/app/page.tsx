'use client';

import { ChosenUs } from '@/components/ChosenUs/ChosenUs';
import { data } from '@/utils/data';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ChosenUs data={data} />
    </main>
  );
}
