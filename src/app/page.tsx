'use client';

import { CategoryItemList } from '@/widgets/CategoryItemList';
import { chosenUsData, ChosenUs } from '@/widgets/company/ChosenUs';
import { InfoConditions } from '@/widgets/company/InfoConditions';

import { StHeading1 } from '@/shared/styles/global';

import { StMainHeading } from './styled';

export default function Home() {
  return (
    <>
      <StMainHeading $justifyContent='center'>
        <StHeading1>Аренда сельхозтехники</StHeading1>
      </StMainHeading>
      <CategoryItemList />
      <ChosenUs data={chosenUsData} />
      <InfoConditions />
    </>
  );
}
