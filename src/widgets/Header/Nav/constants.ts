export enum mainPageAnchors {
  catalog = 'catalog',
  services = '#services',
  about = 'about',
}

export const HeaderNavItems: { title: string; link: mainPageAnchors }[] = [
  {
    title: 'Автопарк',
    link: mainPageAnchors.catalog,
  },
  {
    title: 'О компании',
    link: mainPageAnchors.about,
  },
  {
    title: 'Услуги',
    link: mainPageAnchors.services,
  },
];
