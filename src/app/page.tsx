import type { Metadata } from 'next';

import { CategoryItemList } from '@/widgets/CategoryItemList';
import { chosenUsData, ChosenUs } from '@/widgets/company/ChosenUs';
import { InfoConditions } from '@/widgets/company/InfoConditions';

export const metadata: Metadata = {
  title: 'Агропарк',
  description: 'Платформа-для-аренды-сельскохозяйственной-техники-и-оборудования',
};

export default function Home() {
  return (
    <>
      <CategoryItemList />
      <ChosenUs data={chosenUsData} />
      <InfoConditions />
    </>
  );
}
