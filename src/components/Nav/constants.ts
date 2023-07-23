import { MainPageAnchors } from '@/components/Nav/typing';

export const headerNavItems: { title: string; link: MainPageAnchors }[] = [
  {
    title: 'Автопарк',
    link: MainPageAnchors.catalog,
  },
  {
    title: 'О компании',
    link: MainPageAnchors.about,
  },
  {
    title: 'Услуги',
    link: MainPageAnchors.servieces,
  },
];
