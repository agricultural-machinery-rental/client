export enum MainPageAnchors {
  catalog = '#catalog',
  servieces = '#servieces',
  about = '#about',
}

export type TNavProps = {
  navItems: { title: string; link: MainPageAnchors }[];
};
