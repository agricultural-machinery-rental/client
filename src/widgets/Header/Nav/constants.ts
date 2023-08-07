export enum mainPageAnchors {
  catalog = '#catalog',
  about = 'about',
}

export const HeaderNavItems: { title: string; link: mainPageAnchors }[] = [
  {
    title: 'О компании',
    link: mainPageAnchors.about,
  },
  {
    title: 'Каталог',
    link: mainPageAnchors.catalog,
  },
];
