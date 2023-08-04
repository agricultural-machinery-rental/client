export enum MainPageAnchors {
  catalog = '#catalog',
  servieces = '#servieces',
  about = 'about',
}

export const HeaderNavItems: { title: string; link: MainPageAnchors }[] = [
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
