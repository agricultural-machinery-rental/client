export enum headerLinks {
  catalog = '/catalog',
  about = '/about',
}

export const HeaderNavItems: { title: string; link: headerLinks }[] = [
  {
    title: 'О компании',
    link: headerLinks.about,
  },
  {
    title: 'Каталог',
    link: headerLinks.catalog,
  },
];
